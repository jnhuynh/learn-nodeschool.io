var http = require("http"),
    fs   = require("fs");

function callback(request, response) {
  var file = fs.createReadStream(filePath);

  response.writeHead(200, { 'content-type': 'text/plain' })
  file.pipe(response);
}

var port     = parseInt(process.argv[2]),
    filePath = process.argv[3];

var server = http.createServer(callback);

server.listen(port);

