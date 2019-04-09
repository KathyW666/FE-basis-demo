function startMove(obj, att, target) {
	clearInterval(obj.timer);

	var speed = 0;
	var currentValue = 0;
	obj.timer = setInterval(function() {
		// 处理透明度
		if (att == 'opacity') {
			currentValue = parseInt(getStyle(obj, att)*100);
		} else {
			currentValue = getStyle(obj, att);
		}
		
		speed = (target - currentValue) / 7;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

		currentValue += speed;
		if (currentValue == target) {
			clearInterval(obj.timer);
		} else {
			if (att == 'opacity') {
				obj.style.opacity= currentValue / 100;
				obj.style.filter = "alpha(opacity:"+ currentValue +")";
				// 兼容性写法 IE8
			} else {
				obj.style[att] = currentValue + 'px';
			}
		}
	}, 30);
}

function getStyle(obj, att) {
	// 注意内联样式返回px
	return parseInt(window.getComputedStyle ? getComputedStyle(obj)[att] : obj.currentStyle[att]);
}
