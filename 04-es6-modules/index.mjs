// console.log(module); // ReferenceError: module is not defined in ES module scope
// console.log(require); //ReferenceError: require is not defined in ES module scope, you can use import instead
// console.log(exports); // ReferenceError: exports is not defined in ES module scope
// console.log(__filename); // ReferenceError: __filename is not defined in ES module scope
// console.log(__dirname); // ReferenceError: __dirname is not defined in ES module scope

import * as cluster from "node:cluster";

import {season as spring, temperature} from './named-exports.mjs';
import {URL, PASSWORD, USERNAME} from './inline-exports.mjs';
import getDataFromServer from "./default-export.mjs";

console.log(spring, temperature, URL, PASSWORD, USERNAME);
getDataFromServer('https://jsonplaceholder.typicode.com/todos/1')
    .then(post => console.log(post))
    .catch(err => console.log(err))
