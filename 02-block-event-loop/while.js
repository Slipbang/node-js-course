let isRunning = true;

setTimeout(() => isRunning = false, 100)

while (isRunning) {
    console.log('while loop is running...')
}