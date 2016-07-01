'use strict';

export default function getImageSource(shopData, kind) {
    let url = shopData && shopData.imgurl ? shopData.imgurl : null;
    if (url && kind) {
        url = url.replace('w.h', '160.0');
    }

    return {url};
}
