// Express.js makes this requests easier to implement

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((request, response)=>{

});

// Look for local environment port, otherwise runs port 5000
const PORT = process.env.PORT || 5000;

server.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));