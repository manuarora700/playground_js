// Time complexity O(log(m+n));

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function sockMerchant(n, ar) {
    let frequencyCounter = {};
    let result = 0;
    for (let i = 0; i < n; i++) {
        //populate the frequency counter
        if (frequencyCounter[ar[i]]) {
            frequencyCounter[ar[i]]++;
        } else {
            frequencyCounter[ar[i]] = 1;
        }
    }

    for (let i in frequencyCounter) {
        result = result + Math.floor(frequencyCounter[i] / 2);
    }
    return result
}



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}
