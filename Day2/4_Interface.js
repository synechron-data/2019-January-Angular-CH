var Person = (function () {
    function Person() {
    }
    Person.prototype.greet = function (msg) {
        return "Hello";
    };
    return Person;
}());
var p1 = new Person();
var p2 = new Person();
console.log(p1.greet("Hi"));
console.log(p2.greet("Hi"));
