var fs = require("fs");

var filepath   = process.argv[2],
    fileBuffer = fs.readFileSync(filepath);

var fileString = fileBuffer.toString(),
    fileArray  = fileString.split("\n");

// fileArray.forEach(function(line, index) {
//   console.log((index + 1).toString() + " " + line);
// });

console.log(fileArray.length - 1);
