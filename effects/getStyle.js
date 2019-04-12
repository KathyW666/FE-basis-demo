function getstyle(object, att) {
	return window.getComputedStyle ? getComputedStyle(object)[att] : object.currentStyle[att];
}

// jQuery的封装
// function $(id) {
// 	return document.getElementById(id);
// }


function $(str) {
	if (typeof str === 'string') {
		return document.getElementById(str);
	} else if (typeof str === 'function') {
		return window.onload = str;
	}
}
