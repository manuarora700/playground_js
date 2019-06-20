
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
    
    let t = Number(input[0]);
    input = input.splice(1);
    // console.log(t, input);
    
    for(let i = 0; i < t; i++) {
        let data = input[0].split(" ");
        let size = Number(data[0]);
        let k = Number(data[1]);
        
        let array = input[1].split(" ");
        // console.log(size);
        // console.log(k);
        // console.log(array);
        
        console.log(arrayRotation(array, k, size));
        
        input = input.splice(2);
        // console.log(input);
    }
    
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail
function arrayRotation(a, k, size) {
    let result = new Array(size);
    for(let i = 0; i < a.length; i++) {
        result[(i+k)%a.length] = Number(a[i]);
    }
    return result.join(" ");
}
// Write your code here
