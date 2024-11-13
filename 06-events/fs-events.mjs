import fs from "fs";
import {EventEmitter} from "events";

const fileEmitter = new EventEmitter();

// КОД ДЕМОНСТРАЦИОННЫЙ!!! не стоит использовать события для fs методов, лучше использовать промисы или колбэки.

const filePath = './text.txt';

fileEmitter.on('writeComplete', () => {
    console.log('file text.txt was written');

    fs.appendFile(filePath, '\nsome another text', (err) => {
        fileEmitter.emit('appendComplete')
    });
})

fileEmitter.on('appendComplete', () => {
    console.log('another text was appended to text.txt file');
    fs.rename(filePath, './renamed-text.txt', (err) => {
        fileEmitter.emit('renameComplete')
    });

})

fileEmitter.on('renameComplete', () => console.log('file text.txt was renamed to renamed-text.txt'))

fs.writeFile(filePath, 'some text', (err) => {
    fileEmitter.emit('writeComplete');
})


