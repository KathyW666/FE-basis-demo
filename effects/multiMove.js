function startMove(obj, attJSON) {
    clearInterval(obj.timer);

    var speed = 0;
    var currentValue = 0;
    obj.timer = setInterval(function(){
        var isStop = true;
        for (key in attJSON) {
            if (key == 'opacity') {
                currentValue = parseInt(getStyle(obj, key)*100);
            } else {
                currentValue = parseInt(getStyle(obj, key));
            }
            speed = (attJSON[key] - currentValue) / 7;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            currentValue += speed;
            if (currentValue != attJSON[key]) {
                isStop = false;
            }
            if (key == 'opacity') {
                obj.style.opacity = currentValue / 100;
                obj.style.filter = "alpha(opacity:"+currentValue+")";
            } else {
                obj.style[key] = currentValue + 'px';
            }
        }
        if (isStop) {
            clearInterval(obj.timer);
        }
    }, 30);
}


function getStyle(obj, att) {
	// 注意内联样式返回px
	return window.getComputedStyle ? getComputedStyle(obj)[att] : obj.currentStyle[att];

}
