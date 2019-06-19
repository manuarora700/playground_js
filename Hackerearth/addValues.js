
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
    var a, b, c = [], l, i = 0;
    input = input.split(/\n/g);
    // console.log(input);
    a = input[1].split(' ');
    b = input[2].split(' ');
    l = a.length;
    // console.log(a, b);
    for(let i = 0; i < l; i++) {
        c.push(Number(a[i]) + Number(b[i]));
        
    }
    process.stdout.write(c.join(' '));
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail


// Write your code here
