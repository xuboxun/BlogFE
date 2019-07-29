
// webp转换
export const wrapWebpLink = function(link) {
    if (window.isSupportWebp) {
        return link.replace(/^(.+\.)(.+)$/g, function(match, p1) { return p1 + 'webp' });
    }
    return link;
};

export const setTitle = function(title) {
    if (title) {
        document.title = title + ' by 思吾轩-徐博勋的个人博客';
    } else {
        document.title = '思吾轩-徐博勋的个人博客';
    }
};
