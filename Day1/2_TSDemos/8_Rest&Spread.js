// var n: number;
// var arr: number[];
// var arr: Array<number>;
// function Hello(name: string, args?: Array<any>) {
//     return "Hello " + name;
// }
// Hello("Manish");
// Hello("Manish", ["Sharma"]);
// function Hello(name: string, ...args: Array<any>) {
//     console.log("Hello " + name);
//     console.log(args);
//     console.log(arguments);
// }
// Hello("Manish");
// Hello("Manish", "Sharma");
// Hello("Manish", "Sharma", "Pune");
// Hello("Manish", "Sharma", "Pune", 411038);
function Average() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i_1 = 0; i_1 < args.length; i_1++) {
        sum += args[i_1];
    }
    var length = args.length;
    if (length > 0)
        return sum / length;
    else
        return sum;
}
// console.log(Average());
// console.log(Average(1));
// console.log(Average(1, 2));
// console.log(Average(1, 2, 3, 4, 5));
var arr = [1, 2, 3, 4, 5];
// console.log(Average(...arr));
// console.log(arr);
// console.log(...arr);
// var nArr = arr.concat(6,7,8);
var nArr = arr.concat([6, 7, 8]);
console.log(nArr);
