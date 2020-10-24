// Express.js makes this requests easier to implement

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        fs.readFile(
            path.join(__dirname, 'public', 'index.html'),
            (err, content) => {
                if (err) throw err;
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.end(content);
            })
    }
    if (request.url === '/api/users') {
        const users = [
            {name:'Bob Smith', age:40},
            {name:'John Doe',age:30}
        ];
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(users));

    }
});

// Look for local environment port, otherwise runs port 5000
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

