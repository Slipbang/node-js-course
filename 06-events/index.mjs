import { EventEmitter } from "events";

const emitter = new EventEmitter();

const timeoutListenerFn = (secondsQty) => console.log(`timeout event in ${secondsQty} seconds`);

emitter.on('timeout', timeoutListenerFn);

setTimeout(() => emitter.emit('timeout', 1), 1000);
setTimeout(() => emitter.emit('timeout', 2), 2000);
setTimeout(() => emitter.emit('timeout', 3), 3000);

emitter.once('singleEvent', () => {
    console.log('single event occurred');
})

// функция будет вызвана однократно
setTimeout(() => emitter.emit('singleEvent'), 1000);
setTimeout(() => emitter.emit('singleEvent'), 2000);

setTimeout(() => emitter.off('timeout', timeoutListenerFn),2000);

setTimeout(() => emitter.emit('timeout', 4), 4000);