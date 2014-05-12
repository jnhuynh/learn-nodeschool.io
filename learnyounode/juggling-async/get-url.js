var http = require("http");
var bl   = require("bl");

function getUrl(url, callback) {
  return http.get(url, function(res) {
    var blDataHandler = bl(function(err, data) {
      if (err) {
        console.log("Error: ", err);
        return;
      }

      callback(null, data);
    });

    res.setEncoding("utf-8");
    res.pipe(blDataHandler);
  });
}

module.exports = getUrl;

