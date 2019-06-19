
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
    input = input.split(/\n/g);
    // console.log(input);
    
    let kases = Number(input[0]);
    // input.splice(0, 1);
    // console.log(input);
    for(let i = 1; i <= kases; i++) {
        console.log(palindrome(input[i]));
    }
}

function palindrome(string) {
    // let reversed = string.split('').reverse().join('');
    
    let i = 0, j = string.length - 1;
    while(i < j) {
        if(string[i] !== string[j]) {
            return "NO";
        } else {
            i++;
            j--;
        }
    }
    
    return string.length % 2 === 0 ? "YES EVEN" : "YES ODD";
    
    // if(reversed === string) {
    //     if(string.length %2 === 0) {
    //         return "YES EVEN";
    //     } else {
    //         return "YES ODD"
    //     }
    // } else {
    //     return "NO";
    // }
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail


// Write your code here
