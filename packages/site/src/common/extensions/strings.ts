function isExternalLink(link: string): boolean {
    return link.includes('http') || link.includes('mailto');
}

function join(
    separator: string,
    ...params: Array<string | undefined | null>
): string {
    return params.filter(p => Boolean(p)).join(separator);
}

export const Strings = {
    isExternalLink,
    join
};
