var http = require('http') 	//allows http modules
var fs = require('fs') 		//allows File System modules - might need read & write
var url = require('url')	//allows url to be split into readable parts. Pretty dope as it splits a whole link into host, pathname, searchs

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
