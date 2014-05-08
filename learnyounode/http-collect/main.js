var getUrl = require("./get-url.js");

var url = process.argv[2];

getUrl(url, function(data) {
  var dataString = data.reduce(function(prev, cur) {
    return prev += cur.toString();
  }, "");

  console.log(dataString.length);
  console.log(dataString);
});
