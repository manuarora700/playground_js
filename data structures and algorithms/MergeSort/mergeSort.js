function mergeSort(arr) {
	if(arr.length === 1) {
		return arr;
	}

	const center = Math.floor(arr.length/2);
	const left = arr.slice(0, center);
	const right = arr.slice(center);

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	const results = [];

	while(left.length && right.length) {
		if(left[0] < right[0]) {
			results.push(left.shift());
		} else {
			results.push(right.shift());
		}
	}

	return [...results, ...left, ...right];
}

mergeSort([9,8,7,6,5,4,3,2,1]);