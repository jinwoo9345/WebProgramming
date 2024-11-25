const http = require('http');
const fs = require("fs");
const server = http.createServer();
server.on('request',function(req,res){
    const filename = 'Week3.html';
    fs.readFile(filename,(err,data)=>{
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.write('Internal Server Error');
            res.end();
            return;
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
});


server.listen(3000,()=>{
    console.log("server listens on port 1000 !");
})