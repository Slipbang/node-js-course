import fs from "fs";

try {
    fs.writeFileSync('./text.txt', 'some text')
    console.log('file text.txt was written');
    fs.appendFileSync('./text.txt', '\nsome another text');
    console.log('another text was appended to text.txt file');
    fs.renameSync('./text.txt', './renamed-text.txt');
    console.log('file text.txt was renamed to renamed-text.txt')
} catch (err) {
    console.log(err)
}
