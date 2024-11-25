// function Show() {
//     console.log("Show Completed...");
// }
// var r = Show();
// function Show(): void {
//     console.log("Show Completed...");
// }
// Fn Declaration
function Add1(a, b) {
    return a + b;
}
// Fn Expression
var Add2 = function (a, b) {
    return a + b;
};
var Add3;
Add3 = function (a, b) {
    return a + b;
};
var Add4;
Add4 = function (a, b) {
    return a + b;
};
var Add5;
Add5 = function (a, b) { return a + b; };
// console.log(Add1(2, 3));
// console.log(Add2(2, 3));
// console.log(Add3(2, 3));
// console.log(Add4(2, 3));
// console.log(Add5(2, 3));
function Display(cb) {
    console.log(cb(23, 45));
}
Display(function (a, b) { return a * b; });
Display(function (a, b) { return a * b; });
Display(function (a, b) { return a * b; });
