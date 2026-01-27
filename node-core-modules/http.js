const http = require('http');

const posts = [
    { id: 1, title: 'Post One', body: 'This is the first post' },
    { id: 2, title: 'Post Two', body: 'This is the second post' },
    { id: 3, title: 'Post Three', body: 'This is the third post' },
]

const server = http.createServer((req, res) => {
    // res.end('Hello World');
    const url = req.url;

    // don't create a website 
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<h1>Hello World</h1>`);
    } else if (url === '/about') {
        res.end(`<h1>About</h1>`);
    } else if (url === '/api/posts') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({success: true, data: posts}));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`<h1>404 Not Found</h1>`);
    }
    };

server.listen(5000, () => {
    console.log('Server is running on port 5000');
}