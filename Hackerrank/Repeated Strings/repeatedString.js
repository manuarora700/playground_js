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

// Complete the repeatedString function below.
function repeatedString(s, n) {
    // Totally mathematics

    let perfectlyDivisibleLength = Math.floor(n / s.length);
    let countOfLetterA = (s.split("a").length - 1) * perfectlyDivisibleLength;
    let remainderCharacters = n % s.length;

    // Count number of As in the remaining string which is included
    for (let i = 0; i < remainderCharacters; i++) {
        if (s.charAt(i) === 'a') {
            countOfLetterA++;
        }
    }
    return countOfLetterA;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
