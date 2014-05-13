var Http = require("http"),
    Url  = require("url");

function parseTime(time) {
  return {
    hour:    time.getHours(),
    minute:  time.getMinutes(),
    second:  time.getSeconds(),
  };
}

function unixTime(time) {
  return {
    unixtime: time.getTime()
  };
}

function callback(request, response) {
  var url           = Url.parse(request.url, true),
      isValidMethod = (request.method === "GET"),
      payload,
      time;

  if (isValidMethod) {
    time = new Date(Date.parse(url.query.iso));

    switch(url.pathname) {
      case "/api/unixtime":
        payload = unixTime(time);
        break;
      case "/api/parsetime":
        payload = parseTime(time);
        break;
    }
  }

  if (payload) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify(payload));
  } else {
    response.writeHead(404);
  }

  response.end();
}

var port   = parseInt(process.argv[2]),
    server = Http.createServer(callback);

server.listen(port);

