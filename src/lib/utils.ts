export function replacePlaceholders(
    str: string,
    vars: Record<string, string | number | null | undefined>
): string {
    return str.replace(/{{\s*([\w_]+)\s*}}/g, (match, key) => {
        if (vars[key] !== undefined && vars[key] !== null) {
            return String(vars[key]);
        }
        console.warn(`Key '${key}' not found in template vars.`);
        return match;
    });
}
