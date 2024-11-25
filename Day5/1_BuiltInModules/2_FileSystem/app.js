const fs = require('fs');

// -------------------------------- Reading File
// fs.readFile('./file1.txt', 'utf-8', (err, data) => {
//     if (err)
//         console.log(err);
//     else
//         console.log(data);
// });

// var data = fs.readFileSync('./file1.txt', 'utf-8');
// console.log(data);


// // -------------------------------- Writing File
// fs.writeFile('./file2.txt', 'Hello from Node App', 'utf-8', (err, data) => {
//     if (err)
//         console.log(err);
//     else
//         console.log("File Write Completed......");
// });

// -------------------------------- Append File
fs.appendFile('./file3.txt', 'Hello from Node App\n', 'utf-8', (err, data) => {
    if (err)
        console.log(err);
    else
        console.log("File Append Completed......");
});

console.log("Completed.....");