'use strict';

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

// Complete the plusMinus function below.
function plusMinus(arr) {
    let map = {
        "negative": 0,
        "positive": 0,
        "zero": 0
    };
    let result = [];
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i] < 0)
            map["negative"]++;
        if (arr[i] === 0)
            map["zero"]++;
        if (arr[i] > 0)
            map["positive"]++;
    }
    result.push(map["positive"] / len);
    result.push(map["negative"] / len);
    result.push(map["zero"] / len);

    for (let i of result) {
        console.log(i);
    }
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
