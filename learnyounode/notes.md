# learnyounode

- Writing to STDOUT:
```javascript
console.log();
```

- Accessing CLI arguments:
```javascript
// process is a global object
process.argv
// => ['node', 'path/to/file.js', firstArgument, ..., lastArgument]
```

- Loading global modules:
```javascript
var fs = require("fs");
```

- `fs`
  - Part of Node core library responsible for filesystem operations.
  - Synchronous operations all end in `Sync`, e.g.
```javascript
fs.readFileSync('/path/to/file');
// => Buffer object with contents of file.

fs.readFileSync('/path/to/file', "utf-8");
// => String.
```
  - Reading directories
```javascript
fs.readdir("path/to/dir", function(err, list) {
  // list is the list of files in a directory.
});
```

- `Buffer`
  - Node's way of representing arbitrary arrays of data, e.g. ASCII, Binary,
    and etc.
  - Can be convert to strings using `toString()`.

- Asynchronous
  - Asynchronous operations is the "Node.js way".
  - Asynchronous filesystem operations are default unless hey have a `Sync`
    suffix.
```javascript
fs.readFile('/path/to/file');
```
  - Callbacks
```javascript
// Idiomatic callbacks has error as first argument and can be checked for
// truthy-ness.
function callback (err, data) { /* ... */ }
```
