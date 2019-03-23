// Bubble sort implementation

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  const len = array.length;
for(let i = 0; i < len; i++) {
  for(let j = 0; j < len; j++)
    if(array[j] > array[j+1]) {
      //Swap
      temp = array[j];
      array[j] = array[j+1];
      array[j+1] = temp;
    }
  }
}

bubbleSort(numbers);
console.log(numbers);