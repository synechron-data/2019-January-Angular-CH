// const repl = require('repl');
// console.log(repl._builtinLibs);

const readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question("Enter a number: ", function(input){
//     console.log("You entered %s", input);
//     rl.close();
// });

rl.question("Enter a number: ", function (num1) {
    let n1 = parseInt(num1);
    
    rl.question("Enter a number: ", function (num2) {
        let n2 = parseInt(num2);
        let sum = n1 + n2;
        console.log("Result is: %s", sum);
        rl.close();
    });
});

console.log("Last Line....");