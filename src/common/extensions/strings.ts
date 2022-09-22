function isExternalLink(link: string): boolean {
    return link.includes('http') || link.includes('mailto');
}

export const Strings = {
    isExternalLink
};
