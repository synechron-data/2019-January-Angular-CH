var calculator = (function () {

    function add(x: number, y: number) {
        return x + y;
    }

    function sub(x: number, y: number) {
        return x - y;
    }

    function mul(x: number, y: number) {
        return x * y;
    }

    function div(x: number, y: number) {
        return x / y;
    }

    // return {
    //     addition: add,
    //     sub: sub,
    //     mul: mul
    // };

    return {
        add, sub, mul
    };
})();

// var add = calculator.add;
// var sub = calculator.sub;

// Object Destructuring
var { add, sub } = calculator;

// console.log(add(2, 3));
// console.log(sub(2, 3));


var arr = [10, 20, 30, 40, 50];

// var x = arr[0];
// var y = arr[1];

var [x, , y] = arr;
console.log("Before: ", x, y);
[y, x] = [x, y];
console.log("After: ", x, y);

// JavaScript Object
// var obj = {
//     id: 1, 
//     name: "ABC", 
//     display: function () {
//         console.log(this);
//     }
// };

// // obj.display();
// console.log(obj);
// console.log(JSON.stringify(obj));