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

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {

    let map = {};
    arr.sort(function (a, b) {
        return a - b;
    })
    // populate map
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]]) map[arr[i]]++;
        else map[arr[i]] = 1;
    }

    // traverse for max element
    let max = 0;
    let keys = Object.keys(map);
    let values = Object.values(map);
    let j = 0;
    for (let i = 0; i < values.length; i++) {
        if (values[i] > max) {
            max = values[i];
            j = i;
        }
    }

    return keys[j];

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
