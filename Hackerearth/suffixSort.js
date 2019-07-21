/**
Approach:
1. First create suffixes of the given string
2. Then sort the suffixes using the sort() method
3. Then return the required number from the array

n = length of string
Time: O(nlogn)
Space: O(n) for storing sorted suffixes
*/
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
    input = input.split(" ");
    let str = input[0];
    let num = input[1];
    
    console.log(suffixSort(str, num));
}
function suffixSort(str, num) {
  let suffixes = createSuffixes(str);
  suffixes = sortArray(suffixes);

  return suffixes[num - 1];
}

function createSuffixes(str) {
  let result = [];

  for(let i = 0; i < str.length; i++) {
    result.push(str.split('').splice(i).join(''));
  }
  return result;
}

function sortArray(arr) {
  return arr.sort();
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail

// Write your code here
