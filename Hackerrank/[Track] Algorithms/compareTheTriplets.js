'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    let aPoints = 0;
    let bPoints = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) aPoints++;
        if (b[i] > a[i]) bPoints++;
        else continue;
    }
    let result = [];

    // let max = Math.max(aPoints, bPoints);
    // let min = Math.min(aPoints, bPoints);
    result.push(aPoints);
    result.push(bPoints);

    return result;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
