// Implement selection sort

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const len = array.length;
  for(let i = 0; i < len; i++) {
    let min = i;
    for (let j=i+1; j < len; j++) {
      if(array[j] < array[min]) {
        min = j;
      }
    }
    //Swap min values
    let temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
  
}

selectionSort(numbers);
console.log(numbers);