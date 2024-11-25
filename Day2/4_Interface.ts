// let area = function (rect: { h: number, w?: number }) {
//     rect.w = rect.w || rect.h;
//     return rect.h * rect.w;
// }

// var s1 = { h: 10, w: 20 };
// console.log(area(s1));

// var s2 = { h: 10, w: 20, d: 30 };
// console.log(area(s2));

// var s3 = { h: 10 };
// console.log(area(s3));

// interface Rectangle {
//     h: number;
//     w?: number;
// }

// let area = function (rect: Rectangle) {
//     return rect.h * rect.w;
// }

// var s1: Rectangle = { h: 10, w: 20 };
// console.log(area(s1));

// // var s2: Rectangle = { h: 10, w: 20, d: 30 };
// // console.log(area(s2));

// var s3: Rectangle = { h: 10 };
// console.log(area(s3));

interface IPerson {
    name: string;
    age: number;
    greet: (msg: string) => string;
}

class Person implements IPerson {
    name: string;
    age: number;
    greet(msg: string): string {
        return "Hello";
    }
}

var p1: IPerson = new Person();
var p2: IPerson = new Person();


// let p1: IPerson = {
//     name: "Abhijeet",
//     age: 36,
//     greet: function (m) {
//         console.log(m);
//         return "Hi There";
//     }
// };

// let p2: IPerson = {
//     name: "Manish",
//     age: 36,
//     greet: function (m) {
//         console.log(m);
//         return "Hello There";
//     }
// };

console.log(p1.greet("Hi"));
console.log(p2.greet("Hi"));