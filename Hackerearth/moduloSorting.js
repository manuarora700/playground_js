/**
Approach 1 - Partially accepted.
Bubble sort by doing a[j]%k > a[j+1]%k;
Time O(N^2)
Space O(1);
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
    // process.stdout.write("Hi, " + input + ".\n");       // Writing output to STDOUT

    input = input.split("\n");
    // console.log(input);
    
    let data = input[0].split(" ");
    let size = Number(data[0]);
    let k = Number(data[1]);
    // console.log(size, k);
    
    let array = input[1].split(" ");
    // console.log(array);
    
    console.log(moduloSort(array, k).join(" "));
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail

function moduloSort(a, k) {
    var len = a.length,
        i, j, stop;

    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            if (a[j]%k > a[j+1]%k){
                swap(a, j, j+1);
            }
        }
    }

    return a;
}

function swap(arr, first_Index, second_Index){
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}

// Write your code here
