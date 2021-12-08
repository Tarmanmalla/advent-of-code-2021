import * as _ from 'lodash';
import * as fs from 'fs';
import * as path from 'path';

let data: number[] = [];
data = fs.readFileSync(path.join(__dirname, 'day7.txt'),'utf8').trim().split(",").map((input: string): number => {
    return parseInt(input);
});

let fn = (t: number): number => {
    let count: number = 0;
    _.forEach(data, number => {
        count = count + Math.abs(number - t);
    });

    return count;
}

let fn2 = (t: number): number => {
    let count: number = 0;
    let add: number = 0;
    _.forEach(data, number => {
        let d: number = Math.abs(number - t);
        add = d * (d + 1) / 2;
        count = count + add;
    });
    return count;
}

let part1: number[] = [];
let part2: number[] = [];
_.range(1, data.length).forEach((index) => {
    part1.push(fn(index));
    part2.push(fn2(index));
})

// answer part 1
const min1 = Math.min(...part1);
console.log(min1);
let index1 = part1.indexOf(min1);
console.log(index1 + 1);

// answer part 2
const min2 = Math.min(...part2);
console.log(min2);
let index2 = part2.indexOf(min2);
console.log(index2 + 1);