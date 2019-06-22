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

/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function dynamicArray(n, queries) {
    // Write your code here
    let sequenceList = [];
    let result = [];
    let lastAnswer = 0;
    for (let i = 0; i < n; i++) {
        sequenceList.push([]);
    }

    // actual code
    for (let i = 0; i < queries.length; i++) {
        // check for query one
        if (queries[i][0] === 1) {
            let x = queries[i][1];
            let y = queries[i][2];

            sequenceList[(x ^ lastAnswer) % n].push(y);
        }
        if (queries[i][0] === 2) {
            let x = queries[i][1];
            let y = queries[i][2];

            let seq = sequenceList[(x ^ lastAnswer) % n];
            lastAnswer = seq[y % seq.length];
            result.push(lastAnswer);
        }
    }
    return result;


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const q = parseInt(firstMultipleInput[1], 10);

    let queries = Array(q);

    for (let i = 0; i < q; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const result = dynamicArray(n, queries);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
