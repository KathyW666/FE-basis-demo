(function flexible(win, doc) {
    var docEl = doc.documentElement;
    // <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover">
    var metaEl = doc.querySelector('meta[name="viewport"]');
    var metaElAttr = null;
    var dpr = 0, scale = 0, tid = null;

    if (metaEl) {
        var match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/ig);
        if (match) {
            scale = parseFloat(match[1]);
            dpr = parseFloat(1 / scale).to(2);
        }
    }

    // 针对iphone做dpr适配
    if(!dpr && !scale) {
        var isIphone = win.navigator.appVersion.match(/iphone/ig);
        var devicePixelRatio = win.devicePixelRatio;
        if (isIphone) {
            if (devicePixelRatio >= 3 && (!dpr||dpr>=3)) {
                dpr = 3;
            } else if (devicePixelRatio >= 2 && (!dpr||dpr>=2)) {
                dpr = 2;
            } else {
                dpr = 1;
            }
        }
        scale = 1 / dpr;
    }

    // 设置viewport的属性
    metaElAttr = `initial-scale=${scale}; maximum-scale=${scale}; minimum-scale=${scale}; user-scalable=no`;
    // 是否存在meta标签，如果存在，设置content，如果不存在，新建meta标签
    if (metaEl){
        metaEl.setAttribute('content', metaElAttr);
    } else {
        metaEl = doc.createAttribute('meta');
        metaEl.setAttribute('name', 'viewport');
        metaEl.setAttribute('content', metaElAttr);
        if(docEl.firstElementChild) {
            docEl.firstElementChild.appendChild(metaEl);
        } else {
            var wrap = doc.createElement('div');
            wrap.appendChild(metaEl);
            doc.write(wrap.innerHTML);
        }
    }

    function refreshRem() {
        var width = docEl.getBoundingClientRect().width();
        if (width / dpr > 540) {
            width = 540 * dpr;
        }
        var rem = width / 10;
        docEl.style.fontSize = rem + 'px';
    }
    refreshRem();

    win.addEventListener('resize', function(){
        clearTimeout(tid);
        tid = setTimeout(refreshRem(), 300);
    }, false);

    win.addEventListener('pageshow',function(e){
        if(e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem(), 300);
        }
    }, false);

    // 当页面加载完，设置body的font-size
    if(doc.readyState == 'complete') {
        doc.body.style.fontSize = 12 * dpr + 'px';
    } else {
        doc.addEventListener('DOMContentLoaded', function(){
            doc.body.style.fontSize = 12 * dpr + 'px';
        }, false)
    }
})(window, document);
