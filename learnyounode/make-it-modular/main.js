var path = process.argv[2],
    ext  = process.argv[3];

var filteredLs = require("./filtered-ls.js");

filteredLs(path, ext, function(err, list) {
  if (err) {
    console.log("There was an error:", err);
    return;
  }

  list.forEach(function(item) {
    console.log(item);
  });
});
