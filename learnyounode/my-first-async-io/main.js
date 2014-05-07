var fs = require("fs");

var filepath = process.argv[2];

fs.readFile(filepath, {encoding: "utf-8"}, function(error, data) {
  if (error) {
    console.log("Failed to read file: " + filepath);
  } else {
    console.log(data.split("\n").length - 1);
  }
});
