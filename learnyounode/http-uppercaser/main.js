var http = require("http"),
    map  = require("through2-map");

var uppercase = map(function(chunk) {
  return chunk.toString().toUpperCase();
});

function callback(request, response) {
  if (request.method !== "POST") {
    return;
  }

  request.pipe(uppercase).pipe(response);
}

var port   = parseInt(process.argv[2]),
    server = http.createServer(callback);

server.listen(port);

