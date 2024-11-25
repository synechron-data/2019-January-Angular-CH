// function Show() {
//     console.log("Show Completed...");
// }

// var r = Show();

// function Show(): void {
//     console.log("Show Completed...");
// }

// Fn Declaration
function Add1(a: number, b: number): number {
    return a + b;
}

// Fn Expression
var Add2 = function (a: number, b: number): number {
    return a + b;
}

var Add3: (x: number, y: number) => number;
Add3 = function (a, b) {
    return a + b;
}

var Add4: (x: number, y: number) => number;
Add4 = (a, b) => {
    return a + b;
}

var Add5: (x: number, y: number) => number;
Add5 = (a, b) => a + b;


// console.log(Add1(2, 3));
// console.log(Add2(2, 3));
// console.log(Add3(2, 3));
// console.log(Add4(2, 3));
// console.log(Add5(2, 3));

function Display(cb: (x: number, y: number) => number) {
    console.log(cb(23, 45));
}

Display(function (a, b) { return a * b; });
Display((a, b) => { return a * b; });
Display((a, b) => a * b);