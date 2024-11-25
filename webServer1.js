const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write("<h1>Hello World</h1>");
    res.end("<h1>Hello World!</h1>");
});



server.listen(1000,()=>{
    console.log("server listens on port 1000 !");
})

