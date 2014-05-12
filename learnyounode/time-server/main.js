var net      = require("net"),
    strftime = require("strftime");

// function zeroFill(i) {
//   return (i < 10 ? '0' : '') + i
// }

// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-'
//     + zeroFill(d.getMonth() + 1) + '-'
//     + zeroFill(d.getDate()) + ' '
//     + zeroFill(d.getHours()) + ':'
//     + zeroFill(d.getMinutes())
// }

function callback(socket) {
  // "YYYY-MM-DD hh:mm"
  var dateString = strftime("%Y-%m-%d %H:%M");

  socket.write(dateString + "\n");
  socket.end();
}

var port = parseInt(process.argv[2]);
var server = net.createServer(callback);

server.listen(port);
