// to run: node create-file.mjs <str filename> <int linesQty>
import fs from "fs";
import path from "path";

if (!process.argv[2] || !process.argv[3]) {
    console.log('filename and lines qty must be supplied as arguments');
    process.exit(0);
}

const fileName = process.argv[2];
const  linesQty = +process.argv[3];

if(isNaN(linesQty)) {
    console.log('Lines qty must be a number');
    process.exit(0);
}

const writeStream = fs.createWriteStream(path.join('./files', fileName));

console.log('start', performance.now());
for (let i = 1; i <= linesQty; i++) {
    writeStream.write(`This is a line number ${i} \n`);
}
console.log('end', performance.now());
setTimeout(() => console.log('timeout', performance.now()), 0)

writeStream.end(() => {
    console.log(`Automatically generated file ${fileName} was created`);
})