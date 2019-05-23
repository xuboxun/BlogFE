
// webp转换
export const wrapWebpLink = function(link) {
    if (window.isSupportWebp) {
        return link.replace(/^(.+\.)(.+)$/g, function(match, p1) { return p1 + 'webp' });
    }
    return link;
};

