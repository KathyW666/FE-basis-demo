function debounce(fn, delay) {
	let timer = null;
	return function() {
		clearTimeout(timer);
		let context = this;
		let args = arguments;
		timer = setTimeout(() => {
			fn.apply(context, args);
		}, delay);
	};
}

function throttle(fn, delay) {
	let canRun = true;
	return function() {
		if (!timer) return;
		canRun = false;
		let context = this;
		let args = arguments;
		setTimeout(() => {
			fn.apply(context, args);
			canRun = true; // 表示可以执行下一次循环
		}, delay);
	}
	
}