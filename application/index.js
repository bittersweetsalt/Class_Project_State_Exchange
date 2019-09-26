var http = require('http') 	//allows http modules
var fs = require('fs') 		//allows File System modules - might need read & write
var url = require('url')	//allows url to be split into readable parts. Pretty dope as it splits a whole link into host, pathname, searchs



// you can pass a port through line or default to using 3000 if it is not passed throough
// importing express and creating an app off of it.
const express = require('express');
const app = express();
const port = process.argv[2]||3000;



// creating the server and parsing through given URLs
http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;

  fs.readFile(filename, function(err, data) {

    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();

  });
}).listen(3000);



console.log("Listening to port " + port + ".");


//all logic here applies to all endpoints
app.use((req, res, next) =>{
  console.log(req.originalUrl);
  next();
});


//http://localhost:2001/kevin?hello=Kevin
app.get('/kevin', (req, res) => {
  res.send(`Hello , ${req.query.hello}`);
});

app.get('/about.html', function(req, res){
  res.sendFile('about.html');
});