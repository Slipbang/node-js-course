import fs from 'fs';

fs.writeFile('./text.txt', 'Some text', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('file text.txt was written ');

        fs.appendFile('./text.txt', '\nSome another text', (err) => {
            if (err) console.log(err);
            else {
                console.log('another text was appended to text.txt file');

                fs.rename('./text.txt', './renamed-text.txt', (err) => {
                    if (err) console.log(err);
                    else console.log('file text.txt was renamed to renamed-text.txt')
                })
            }
        })
    }
})
