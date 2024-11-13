const fs = require('fs');
const dns = require('dns');

function info (text) {
    console.log(text, performance.now().toFixed(2))
}

info('Program start')

setTimeout(() => info('timeout 1'), 0);
setTimeout(() => {
    process.nextTick(() => info('Next tick 2'))
    info('timeout 2');
}, 10);


fs.writeFile('./test.txt', 'some text', (err) => {
    if (err) {
        info(err)
    } else {
        info('file written')
    }
}) // close event

Promise.resolve().then(() => info('promise 1'));

process.nextTick(() => info('next tick 1'));

setImmediate(() => info('Immediate'));

let intervalCount = 0;
const intervalId = setInterval(() => {
    info(`Interval ${++intervalCount}`);
    if (intervalCount === 3) clearInterval(intervalId)
}, 1000)

dns.lookup('localhost', (err, address, family) => {
    info('DNS localhost')
    Promise.resolve().then(() => info('promise 2'));
    process.nextTick(() => info('next tick 3'));
}) // I/O event

info('Program end')

// Program start 27.61
// Program end 32.26
// next tick 1 32.72 - process.nextTick()
// promise 1 32.83 - promises
// timeout 1 33.16 - timeouts
// Immediate 33.44 - timeouts
// DNS localhost 127.0.0.1 33.90 - I/O events
// next tick 3 32.01 - process.nextTick()
// promise 2 32.90 - promises
// file written 35.29- close event
// timeout 2 56.04 - timeouts
// Next tick 2 56.26 - process.nextTick() in next loop
