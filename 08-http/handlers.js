const comments = require('./data');
const fs = require('fs');
const queryString = require('querystring');

function getHome(req, res) {
    fs.readFile('./files/comment-form.html', (err,data) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Server error while loading HTML file')
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        }
    })
}

function getHTML(req,res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><body><div>');
    res.write('<h1>Hello world</h1>');
    res.write('</div></body></html>');
    res.end();
}

function getText(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('This is plain text');
}

function getComments(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(comments));
}

function handleNotFound(req, res){
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Page not found</h1>');
}

function postComment(req,res) {
    res.setHeader('Content-Type', 'text/plain');

    if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
        })
        req.on('end', () => {
            try {
                const comment = queryString.parse(body);
                comment.id = +comment.id;
                comments.push(comment);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.write('<h1>Comment data was received</h1>')
                res.write('<a href="/">Submit one more comment</a>')
                res.end();
            } catch (err) {
                res.statusCode = 400;
                res.end('Invalid Form Data');
            }
        })

    } else if (req.headers['content-type'] === 'application/json') {
        let commentJSON = '';

        req.on('data', (chunk) => commentJSON += chunk);
        req.on('end', () => {
            try {
                comments.push(JSON.parse(commentJSON));
                res.statusCode = 200;
                res.end('Comment data was received');
            } catch (err) {
                res.statusCode = 400;
                res.end('Invalid JSON');
            }
        })
    } else {
        res.statusCode = 400;
        res.end('Data must be in the JSON format or as form');
    }
}

module.exports = {
    getHTML,
    getComments,
    getText,
    handleNotFound,
    postComment,
    getHome,
}