// Express.js makes this requests easier to implement

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((request, response) => {
    /*     if (request.url === '/') {
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
    
        } */

    // Build file path
    let filePath = path.join(
        __dirname,
        'public',
        request.url === '/' ? 'index.html' : request.url
    );

    // Extension of the file
    let extensionName = path.extname(filePath);

    // Initial content type
    let contentType = 'text/html';

    // Check ext and set content type
    switch (extensionName) {
        case ".js":
            contentType = "text/javascript";
            break;
          case ".css":
            contentType = "text/css";
            break;
          case ".json":
            contentType = "application/json";
            break;
          case ".png":
            contentType = "image/png";
            break;
          case ".jpg":
            contentType = "image/jpg";
            break;
    }

    //Read File
    fs.readFile(filePath,(error, content)=>{
        if(err){
            if(err.code=='ENONET'){
                // Page not found
                fs.readFile(path.join(__dirname,'public','404.html'),(error, content)=>{
                    response.writeHead(200, { 'Content-Type': 'text/html' });
                    response.end(content,'utf8');
                })
            } else{
                // Some server error
                response.writeHead(500);
                response.end(`Server Error: ${error.code}`);
            }
        }else{
            // Sucess
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content,'utf8');
        }
    })
});

// Look for local environment port, otherwise runs port 5000
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

