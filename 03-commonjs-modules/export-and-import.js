const {name} = require('./multiple-exports');

const myFriendsName = 'Alice';

module.exports.name = name;
module.exports.myFriendsName = myFriendsName;