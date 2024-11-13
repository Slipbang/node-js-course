import stream from "stream";
import { Transform } from 'stream';
import fs from "fs";

const upperCaseStream = new Transform({
    transform(chunk, encoding, callback) {
        const upperCased = chunk.toString().toUpperCase();
        callback(null, upperCased);
    }
});

const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
        const arr = chunk.toString().split('');
        const lastC = arr.pop();
        const reversed = arr.reverse().concat(lastC).join('');
        callback(null, reversed);
    }
})

process.stdin
    .pipe(upperCaseStream)
    .pipe(reverseStream)
    .pipe(process.stdout);

// // pipe to file
// const filePath = './files/stdin-dump.txt';
// const writeStream = fs.createWriteStream(filePath);
// process.stdin.pipe(writeStream);
//
// // pipe to stdout
// process.stdin.pipe(process.stdout);