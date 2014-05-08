var http = require("http");

function getUrl(url, callback){
  var dataArray = [];

  return http.get(url, function(res) {
    res.setEncoding("utf-8");

    res.on("error", function(error) {
      console.log("Error: ", error);
    });

    res.on("data", function(data) {
      dataArray.push(data);
    });

    res.on("end", function() {
      callback(dataArray);
    });
  });
}

module.exports = getUrl;
