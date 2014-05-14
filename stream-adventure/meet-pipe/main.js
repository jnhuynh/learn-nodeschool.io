var fs = require("fs");

var file_path   = process.argv[2];
var file_stream = fs.createReadStream(file_path);

file_stream.pipe(process.stdout);
