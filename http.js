const http = require('http');

// creating a server 
const server = http.createServer( (req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our Home page');
    }
    if(req.url === '/about'){
        res.end('Here is a brief History.');
    }
    res.end(`
        <h1>OOPS!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back Home<a/>
    `)
});

server.listen(5000);    // where the server listens 