
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
    console.log(checkLongestGoodString(input));     // Writing output to STDOUT
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail
function checkLongestGoodString(string) {
    // console.log(string);
    let vowels = {
        'a': true,
        'e': true,
        'i': true,
        'o': true,
        'u': true
    }
    
    let maxCount = 0, count = 0;
    for(let i = 0; i < string.length; i++) {
        let currChar = string[i];
        if(vowels[currChar]) {
            count++;
            maxCount = Math.max(count, maxCount);
        } else {
            count = 0;
        }
    }
    return maxCount;
}

// Write your code here
