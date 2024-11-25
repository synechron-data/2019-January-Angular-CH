// const fs = require('fs');

// let readStream = fs.createReadStream('./file1.txt');
// let writeStream = fs.createWriteStream('./file2.txt');

// readStream.pipe(writeStream);
// console.log("File Copied...");

const fs = require('fs');
const zlib = require('zlib');

fs.createReadStream('./file1.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('./file1.txt.gz'));

console.log("Compressed...");