// function Hello(name: string) {
//     return "Hello " + name;
// }
// console.log(Hello("Manish"));
// console.log(Hello());
// console.log(Hello("Abhijeet", "Pune"));
// // Optional Parameters (?)
// function addition(a?: number, b?: number): number {
//     a = a || 0;
//     b = b || 0;
//     return a + b;
// }
// Default Parameters
function addition(a, b) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 0; }
    return a + b;
}
console.log(addition(2, 3));
console.log(addition(2));
console.log(addition());
