let isRunning = true;

setTimeout(() => isRunning = false, 50);
process.nextTick(() => console.log('Next tick event'))

function setImmediatePromise() {
    return new Promise((resolve, reject) => {
        setImmediate(() => resolve())
    })
}

async function whileLoop() {
    while (isRunning) {
        console.log('while loop is running...');
        await setImmediatePromise()
    }
}

whileLoop()
    .then(() => console.log('while loop ended'))