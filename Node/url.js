const http = require("http");
const url = require("url");

http.createServer((req,res) => {
     console.log(req.url);

     const ab = url.parse(req.url);
     console.log(ab)
}).listen(3000);