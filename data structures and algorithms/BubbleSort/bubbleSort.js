function bubbleSort(arr) {
	for(let i = 0; i < arr.length; i++) {
		for(let j = 0; j < (arr.length - i - 1); j++) {
			if(arr[j] > arr[j+1]) {
				const lesser = arr[j+1];
				arr[j+1] = arr[j];
				arr[j] = lesser;
				console.log("Array after iteration: ",arr)
			}
		}
	}
	return arr;
}

bubbleSort([9,8,7,6,5,4,3,2,1]);