var http = require("http");
var bl   = require("bl");

function getUrl(url, callback){
  // var dataArray = [];
  //
  // return http.get(url, function(res) {
  //   res.setEncoding("utf-8");
  //
  //   res.on("error", function(error) {
  //     console.log("Error: ", error);
  //   });
  //
  //   res.on("data", function(data) {
  //     dataArray.push(data);
  //   });
  //
  //   res.on("end", function() {
  //     callback(dataArray);
  //   });
  // });
  return http.get(url, function(res) {
    var blDataHandler = bl(function(err, data){
      if (err) {
        console.log("Error: ", err);
        return;
      }

      callback(data);
    });

    res.setEncoding("utf-8");
    res.pipe(blDataHandler);
  })
}

module.exports = getUrl;
