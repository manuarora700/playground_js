process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
 
process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});
 
process.stdin.on("end", function () {
   main(stdin_input);
});
 
function main(input) {
    let data = input.split('\n');
    let control = data[0].split(' ');
    
    let size = control[0];
    let mod = control[1];
    
    let arr = data[1].split(' ');
    let stop = 0;
    
    arr = mergeSort(arr, mod);
    
    process.stdout.write(arr.join(' '));       // Writing output to STDOUT
}
 
function mergeSort (arr, mod) {
  if (arr.length === 1) {
    return arr
  }
 
  const middle = Math.floor(arr.length / 2) 
  const left = arr.slice(0, middle) 
  const right = arr.slice(middle) 
 
  return merge(
    mergeSort(left, mod),
    mergeSort(right, mod),
    mod
  )
}
 
function merge (left, right, mod) {
  let result = []
  let indexLeft = 0
  let indexRight = 0
 
  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft]%mod <= right[indexRight]%mod) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }
 
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}