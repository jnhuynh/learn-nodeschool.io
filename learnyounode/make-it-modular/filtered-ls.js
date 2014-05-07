var fs = require("fs");

function filteredLs(path, ext, callback) {
  var extRegex = new RegExp("\." + ext + "$", "i");

  fs.readdir(path, function(err, list) {
    var filesFilteredByExt;

    if (err) {
      return callback(err);
    }

    filesFilteredByExt = list.filter(function(item) {
      return item.match(extRegex);
    });

    return callback(null, filesFilteredByExt);
  });
}

module.exports = filteredLs;
