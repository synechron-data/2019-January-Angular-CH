var MyEmployee = /** @class */ (function () {
    function MyEmployee(name) {
        this.name = name;
    }
    MyEmployee.prototype.getName = function () {
        return this.name;
    };
    MyEmployee.prototype.setName = function (name) {
        this.name = name;
    };
    return MyEmployee;
}());
var e1 = new MyEmployee("Manish");
console.log(e1.getName());
e1.setName("Abhijeet");
console.log(e1.getName());
var e2 = new MyEmployee("Subodh");
console.log(e2.getName());
e2.setName("Ramakant");
console.log(e2.getName());
