import fs from 'fs/promises';

fs.writeFile('./text.txt', 'Some text')
    .then(() => console.log('file text.txt was written'))
    .then(() => fs.appendFile('./text.txt', '\nSome another text'))
    .then(() => console.log('another text was appended to text.txt file'))
    .then(() => fs.rename('./text.txt', './renamed-text.txt'))
    .then(() => console.log('file text.txt was renamed to renamed-text.txt'))
    .catch(err => console.log(err));

// fs.writeFile('./text.txt', 'Some text', (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('file text.txt was written');
//
//         fs.appendFile('./text.txt', '\nSome another text', (err) => {
//             if (err) console.log(err);
//             else {
//                 console.log('another text was appended to text.txt file');
//
//                 fs.rename('./text.txt', './renamed-text.txt', (err) => {
//                     if (err) console.log(err);
//                     else console.log('file text.txt was renamed to renamed-text.txt')
//                 })
//             }
//         })
//     }
// })