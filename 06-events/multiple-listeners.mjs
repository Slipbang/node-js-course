import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.on('myEvent', () => {
    console.log('first event listener')
})
emitter.on('myEvent', () => {
    console.log('second event listener')
})

emitter.on('otherEvent', () => {
    console.log('other event')
})

emitter.setMaxListeners(25);
setTimeout(() => emitter.emit('myEvent'));

console.log(emitter.eventNames());

console.log(emitter.getMaxListeners())