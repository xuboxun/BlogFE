const isSupportWebp = !![].map
    && document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;

window.isSupportWebp = isSupportWebp;
