var arr = [1, 'name', 3, 5, 0, 0, 0, 0, -1, 2, 'a', true, 5, 6, 'a', 234, 15, 6, 2, 1];
console.log(deduplication1(arr));
console.log(deduplication2(arr));
console.log(deduplication3(arr));

// 排序，O(nlogn)
function deduplication1(arr) {
	if (arr === null || arr.length === 0) return arr;
	arr.sort();
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] === arr[i - 1]) {
			arr.splice(i--, 1);
		}
	}
	return arr;
}

// 暴力, O(n^2)
function deduplication2(arr) {
	if (arr === null || arr.length === 0) return arr;
	for (var i = 0; i < arr.length; i++) {
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				arr.splice(j--, 1);
			}
		}
	}
	return arr;
}



// es6 hash, O(n)
function deduplication3(arr) {
	if (arr === null || arr.length === 0) return arr;
	return Array.from(new Set(arr));
}
