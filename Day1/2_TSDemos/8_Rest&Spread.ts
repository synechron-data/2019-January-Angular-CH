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

function Average(...args: Array<number>): number {
    var sum = 0;

    for (let i = 0; i < args.length; i++) {
        sum += args[i];
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
var nArr = [...arr, 6, 7, 8];

console.log(nArr);