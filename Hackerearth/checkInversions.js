
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
    // console.log(input);
    let a = [], kases, i=0;
    
    kases = Number(input[0]);
    // console.log(kases);
    
    input.splice(0, 1);
    // console.log(input);
    
    for( let j = 1; j <= kases; j++) {
        for(i = 1; i <= Number(input[0]); i++) {
            input[i] = input[i].split(" ");
            // console.log(input[i]);
            a.push(input[i]);
            // console.log(a);
        }
        // console.log(a);
        console.log(inversion(a));
        a = [];
        input.splice(0, i);
        // console.log(input);
    }
    }
// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail


function inversion(a) {
    // console.log("INVERSION WORKING");
    
    // let hash = {};
    let inversions = 0;
    for(let i = 0; i < a.length; i++) {
        for(let j = 0; j < a.length; j++) {
            for (let p = 0; p < a.length; p++) {
                for (let q = 0; q < a.length; q++) {
                    // console.log(`{(${i},${j}), (${p},${q})}`)
                    if (Number(a[i][j]) > Number(a[p][q]) && i <= p && j <= q) {
                        inversions++;
                    }
                }
            }
        }
    }
    return inversions;
    
    
    // console.log(hash);
    // console.log(Object.keys(hash));
};
