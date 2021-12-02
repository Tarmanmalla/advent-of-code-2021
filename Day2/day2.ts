import * as _ from 'lodash';
import * as fs from 'fs';
import * as path from 'path';

let data: string[];
data = fs.readFileSync(path.join(__dirname, 'day2.txt'),'utf8').trim().split("\n").map((input: string): string => {
    return input;
});

interface A {
    h: number,
    d: number,
    a: number
};

let v1 = {
    h: 0,
    d: 0
} as A;

_.forEach(data, command => {
    let char = command.charAt(0);
    let number = parseInt(command.replace( /^\D+/g, ''));
    if (char === 'f') {
        v1.h = v1.h + number;
    } else if (char === 'd') {
        v1.d = v1.d + number;
    } else if (char === 'u') {
        v1.d = v1.d - number;
    }
});

// answer part 1
console.log(v1.h * v1.d);

let v2 = {
    h: 0,
    d: 0,
    a: 0
} as A;

_.forEach(data, command => {
    let char = command.charAt(0);
    let number = parseInt(command.replace( /^\D+/g, ''));
    
    if (char === 'f') {
        v2.h = v2.h + number;
        v2.d = v2.d + (v2.a * number);
    } else if (char === 'd') {
        v2.a = v2.a + number;
    } else if (char === 'u') {
        v2.a = v2.a - number;
    }
});

// answer part 2
console.log(v2.h * v2.d);


