

// console.log("Hello World!");
// console.log(process);
// console.log(module);
// console.log(process.cwd());

// var i = 10;
// console.log(i);

// function add(x, y) {
//     return x + y;
// }

// var result = add(23, 45);
// console.log("Result is: ", result);

// ES5 Class

// var Employee = (function(){
//     function Employee(name){
//         this._name = name;
//     }

//     Employee.prototype.getName = function(){
//         return this._name;
//     }

//     Employee.prototype.setName = function(name){
//         this._name = name;
//     }

//     return Employee;
// })();

// ES2015
class Employee {
    constructor(name) {
        this._name = name;
    }

    getName() {
        return this._name;
    }

    setName(name) {
        this._name = name;
    }
}

var e1 = new Employee("Manish");
console.log(e1.getName());
e1.setName("Abhijeet");
console.log(e1.getName());

