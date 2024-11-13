//const exportedObject = require('./multiple-exports');
const {name, favoriteNumber, hobbies} = require('./multiple-exports');
const {myFriendsName, name: myName} = require('./export-and-import');
const greetingFunction = require('./my-modules/single-export.js');

hobbies.push('Climbing');
console.log(name, favoriteNumber, hobbies);
greetingFunction(name);
greetingFunction(myName);
greetingFunction(myFriendsName)