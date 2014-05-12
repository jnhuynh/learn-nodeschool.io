var getUrl = require("./get-url.js");

var args      = process.argv.splice(2),
    completed = 0,
    dataArray = [];

function iterator(idx) {
  return function callback(err, data) {
    if (err) {
      console.log("Error: ", err);
      return;
    }

    completed += 1;
    dataArray[idx] = data.toString();

    if (completed !== args.length) {
      return;
    }

    dataArray.forEach(function(data) {
      console.log(data);
    });
  }
}

for (var i = 0; i < args.length; i++) {
  var url = args[i];

  getUrl(url, iterator(i));
}
