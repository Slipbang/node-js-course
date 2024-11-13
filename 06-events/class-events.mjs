import EventEmitter from "events";

class Post extends EventEmitter {
    constructor(author, text) {
        super();

        this.author = author;
        this.text = text;
        this.likesQty = 0;
        this.on('likePost', (username) => {
            console.log(`${username} liked your post`)
        })
        this.on('error', (error) => {
            console.error(error)
        })
    }

    like(username) {
        if (!username) {
            return this.emit('error', new Error('No username in the like request'));
        }
        this.likesQty++;
        this.emit('likePost', username);
    }
}

const myPost = new Post('Dmitriy', 'My post');
// myPost.on('likePost', (username) => {
//     console.log(`${username} liked your post`)
// })
myPost.like('Jack');
console.log(myPost.author, myPost.text, myPost.likesQty);

setTimeout(() => myPost.like(''), 1000)
setTimeout(() => myPost.like('Helen'), 2000)