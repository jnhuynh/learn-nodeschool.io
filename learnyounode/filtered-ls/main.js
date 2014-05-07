var fs = require("fs");

var path = process.argv[2],
    ext  = process.argv[3],
    extRegex = new RegExp("\." + ext + "$", "i");

fs.readdir(path, function(err, list) {
  var filesFilteredByExt;

  if (err) {
    console.log("Cannot read path: " + path);
  } else {
    filesFilteredByExt = list.filter(function(item) {
      return item.match(extRegex);
    });

    filesFilteredByExt.forEach(function(item) {
      console.log(item);
    })
  }
});
