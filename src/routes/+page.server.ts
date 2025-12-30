import { error, redirect, type Actions, type ServerLoad } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { dev } from '$app/environment';
import dayjs from 'dayjs'
import 'dayjs/locale/fr';
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)
dayjs.locale('fr');

const parsingOtions = ['DD/MM/YYYY', 'D/M/YYYY', 'DD/M/YYYY', 'D/MM/YY', 'DD-MM-YYYY', 'D-M-YYYY', 'DD-M-YY'];

const isDev = dev;

const TOKEN_COOKIE = 'aga_token';

const crypto = globalThis.crypto;
if (!crypto?.subtle) {
    throw new Error('WebCrypto is not available in this runtime');
}
const textEncoder = new TextEncoder();

function fromB64URL(b64url: string): Uint8Array {
    const padded = b64url.replaceAll('-', '+').replaceAll('_', '/') + '==='.slice((b64url.length + 3) % 4);
    const binary = atob(padded);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return bytes;
}

async function importAEStoPW(passphrase: string): Promise<CryptoKey> {
    const hash = await crypto.subtle.digest('SHA-256', textEncoder.encode(passphrase));
    return crypto.subtle.importKey('raw', hash, { name: 'AES-GCM' }, false, ['encrypt', 'decrypt']);
}

async function fromAES(key: CryptoKey, token: string): Promise<string> {
    const [ivB64, ciphertextB64] = token.split('.');
    if (!ivB64 || !ciphertextB64) throw new Error('Invalid token format');

    const ivBytes = fromB64URL(ivB64);
    const ciphertextBytes = fromB64URL(ciphertextB64);

    const toArrayBuffer = (bytes: Uint8Array): ArrayBuffer => {
        const ab = new ArrayBuffer(bytes.byteLength);
        new Uint8Array(ab).set(bytes);
        return ab;
    };

    const iv = toArrayBuffer(ivBytes);
    const ciphertext = toArrayBuffer(ciphertextBytes);

    const plaintext = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, ciphertext);
    return new TextDecoder().decode(plaintext);
}

function parsePayload(payload: string): Record<string, string> {
    const out: Record<string, string> = {};
    if (!payload) return out;

    // New format: URLSearchParams string: "k=v&k2=v2" (values are URL-encoded).
    const qs = payload.startsWith('?') ? payload.slice(1) : payload;
    const params = new URLSearchParams(qs);
    if ([...params.keys()].length > 0) {
        for (const [k, v] of params.entries()) out[k] = v;
        return out;
    }

    // Legacy fallback: "k=v,k2=v2"
    for (const part of payload.split(',')) {
        if (!part) continue;
        const idx = part.indexOf('=');
        if (idx === -1) continue;
        const k = part.slice(0, idx).trim();
        const v = part.slice(idx + 1);
        if (!k) continue;
        out[k] = v;
    }
    return out;
}

function toUser(record: Record<string, string>): App.IUser {
    const ratioRaw = record.ratio_salaire ?? '';
    const ratio = ratioRaw === '' ? 0 : Number.parseFloat(ratioRaw.replace(',', '.'));

    return {
        id: record.id ?? '',
        civilite: record.civilite ?? '',
        nom: record.nom ?? '',
        prenom: record.prenom ?? '',
        date_de_naissance: record.date_de_naissance ?? '',
        local: ((record.local as App.ILocal) ?? 'fr'),
        actions: record.actions ?? '',
        valorisation: record.valorisation ?? '',
        ratio_salaire: Number.isFinite(ratio) ? ratio : 0,
        email: record.email ?? '',
    };
}

async function userFromToken(token: string): Promise<App.IUser> {
    const passphrase = env.AGA_KEY;
    if (!passphrase) throw new Error('Missing AGA_KEY');
    const key = await importAEStoPW(passphrase);
    const payload = await fromAES(key, token);
    const record = parsePayload(payload);
    return toUser(record);
}

export const load: ServerLoad = async ({ cookies, url }) => {
    const userCookieRaw = cookies.get('user');
    const userInCookie: App.IUser | null = userCookieRaw ? JSON.parse(userCookieRaw) : undefined;

    const token = url.searchParams.get('token');
    const tokenInCookie = cookies.get(TOKEN_COOKIE);

    // If the user is already authenticated, the transient token cookie is no longer needed.
    if (userInCookie && tokenInCookie) {
        cookies.delete(TOKEN_COOKIE, { path: '/' });
    }

    // Consume the token from the URL exactly once: store it in an HttpOnly cookie and redirect to a clean URL.
    if (token) {
        try {
            // Validate/decrypt once so we don't persist garbage tokens.
            await userFromToken(token);
        } catch {
            error(400, { message: 'Invalid token' });
        }

        cookies.set(TOKEN_COOKIE, token, {
            path: '/',
            maxAge: 60 * 10,
            secure: !isDev,
            httpOnly: true,
            sameSite: isDev ? 'lax' : 'strict'
        });

        const cleanUrl = new URL(url);
        cleanUrl.searchParams.delete('token');
        redirect(302, cleanUrl.toString());
    }

    if (!tokenInCookie && !userInCookie) {
        error(418, 'Nothing found');
    }

    return { user: userInCookie ?? null };
};

export const actions: Actions = {
    default: async ({ request, cookies, url }) => {

		const token = url.searchParams.get('token') ?? cookies.get(TOKEN_COOKIE);
		if (!token) error(400, { message: 'Missing token' });

        let userInToken: App.IUser;
        try {
            userInToken = await userFromToken(token);
        } catch {
            error(400, { message: 'Invalid token' });
        }

        
        const data = await request.formData();
        const day = data.get('day') as string;
        const month = data.get('month') as string;
        const year = data.get('year') as string;
        const shouldRemember = data.get('shouldRemember') === 'on';

        const dateInData = dayjs(userInToken.date_de_naissance, parsingOtions);
        const dateInInput = dayjs(day + '/' + month + '/' + year, parsingOtions);
        
        const isValid = year.length === 4 && day && month && dateInData?.isSame(dateInInput)
        
        if (!isValid)
            return { success: false, message: 'Wrong birthdate' };
        
        cookies.set('user', JSON.stringify(userInToken), {
            path: '/',
            ...(shouldRemember && {maxAge: 60 * 60 * 24 * 7}),
            secure: !isDev,
            httpOnly: !isDev,
            sameSite: isDev ? 'lax' : 'strict'
        });

		cookies.delete(TOKEN_COOKIE, { path: '/' });

        return {
            success: true,
            user: userInToken
        };
    }
} satisfies Actions;
