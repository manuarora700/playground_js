/**
Approach:
1. Create hash map of every element in array
2. If queries Array contains an element and it is contained in hash set then return its count
3. If not then return "NOT PRESENT"
TIme - O(A + B)
Space - O(A)
*/
// Sample code to perform I/O:

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
    input = input.split("\n"); 
    // console.log(input);// Writing output to STDOUT
    let size = input[0];
    let arrayGiven = input[1].split(" ");
    let arr = [];
    // console.log(arrayGiven);
    for(let i = 0; i < size; i++) {
        arr[i] = Number(arrayGiven[i]);
    }
    // console.log("arr", arr);
    // console.log(size, arr);
    let queries = Number(input[2]);
    // console.log("Queries", queries);
    
    let queriesArr = [];
    for(let i = 0; i < queries; i++) {
        queriesArr[i] = Number(input[i+3]);
    }
    
    // console.log(input);
    // console.log("Given queries", queriesArr);
    
    checkMemory(arr, queriesArr);
    
}

function checkMemory(arr, queriesArr) {
    let map = {};
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        if(map[arr[i]]) {
            map[arr[i]]++;
        } else {
            map[arr[i]] = 1;
        }
    }
    // console.log(queriesArr);
    for(let i = 0; i < queriesArr.length; i++) {
        let currentElement = queriesArr[i];
        if(map[currentElement]) {
            console.log(map[currentElement]);
        } else {
            console.log("NOT PRESENT");
        }
    }
    // console.log(map);
    // return result.join("\n");
}
// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail

