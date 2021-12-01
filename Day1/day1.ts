import * as _ from 'lodash';
import * as fs from 'fs';

let data: number[];
data = fs.readFileSync('foo.txt','utf8').trim().split("\n").map((input: string): number => {
    return parseInt(input);
});

let preNumber: number = 0;
let count: number = 0;
_.forEach(data, number => {
    if (preNumber !==0 && number > preNumber) {
        count++;
    }
    preNumber = number;
   
});

// answer for test 1
console.log(count);


/** Test 2 */

interface Output {
    previousSum: number,
    totalCount: number
}

interface Input {
    index: number;
    previousSum: number,
    totalCount: number
}

let output: Output = {
    previousSum: 0,
    totalCount: 0
};

let input: Input = {
    index: 0,
    previousSum: 0,
    totalCount: 0
};

let fn = ( i: Input ): Output => {
    let sum: number = data[i.index] + data[i.index + 1] + data[i.index +  2];

    if (i.previousSum !==0 && sum > i.previousSum) {
        i.totalCount++;
    }
    
    output.previousSum = sum;
    output.totalCount = i.totalCount;
    return output;
}



let k: number;
const sizeOfArray = data.length;
for (k = 0; k < (sizeOfArray - 2); k++) {
    input.index = k;
    input.previousSum = output.previousSum;
    input.totalCount = output.totalCount;
    output = fn(input);
}

// answer for test2
console.log(output.totalCount);







