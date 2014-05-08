var getUrl = require("./get-url.js");

var url = process.argv[2];

getUrl(url, function(data) {
  console.log(data);
});
