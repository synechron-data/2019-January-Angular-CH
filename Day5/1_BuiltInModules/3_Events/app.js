const StringEmitter = require('./StringEmitter');

var obj = new StringEmitter();

// obj.on('data', function (s) {
//     console.log("S1 -", s);
// });

// var count = 0;

// function S2(s) {
//     ++count;
//     console.log("S2 -", s.toUpperCase());
//     if (count > 2) {
//         obj.removeListener('data', S2);
//     }
// }

// obj.on('data', S2);

// setInterval(function () {
//     var s = obj.getString();
//     console.log(s);
// }, 2000);

// obj.getStringUsingCB(function(s){
//     console.log(s);
// });

