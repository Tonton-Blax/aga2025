/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    const response = await resolve(event);
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    return response;
}