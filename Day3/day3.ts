import * as _ from 'lodash';
import * as fs from 'fs';
import * as path from 'path';

//let data: string[];

let data1: number[] = [];
data1 = fs.readFileSync(path.join(__dirname, 'day3.txt'),'utf8').trim().split(",").map((input: string): number => {
    return parseInt(input);
});



function getData1(numbers: any) {
    let newData: any[] = [];
    let l: number = 0;
    let count: number = 0;
    for (l = 0; l <= numbers.length - 1; l++) {
        
        if (numbers[l] !== 0) {
            newData.push(numbers[l] - 1);
        } else if (numbers[l] === 0) {
            newData.push(6);
            count = count + 1;
        }
    }

    for (let i = 1; i <= count; i++) {
        newData.push(8);
    }
    //console.log(newData);
    return newData;
}



let k: number = 0;

for (k = 0; k < 80; k++) {
    data1 = getData1(data1);
}

console.log(data1.length);
data1 = [3,4,3,1,2];

function getData2(numbers: any) {
    let newData1: any[] = [];
    let l: number = 0;
    let count: number = 0;
    for (l = 0; l <= numbers.length - 1; l++) {
        
       count = numbers[l] + count;
    }

    for (let i = 1; i <= count; i++) {
        newData1.push(8);
    }
    //console.log(newData);
    return newData1;
}
let kk: number = 0;
for (kk = 0; kk < 256; kk++) {
    data1 = getData2(data1);
}
console.log(data1);
