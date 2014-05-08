var http = require("http");

function getUrl(url, callback) {
  var response = http.get(url, function(res) {
    res.setEncoding("utf-8");

    res.on("error", function(error) {
      console.log("http.get() error: ", error);
    });

    res.on("data", function(data) {
      callback(data);
    })
  });
}

module.exports = getUrl;
