var Manager = (function () {
    function Manager() {
        this.name = "Manager";
    }
    return Manager;
}());
var Developer = (function () {
    function Developer() {
        this.name = "Developer";
    }
    return Developer;
}());
var Tester = (function () {
    function Tester() {
        this.name = "Tester";
    }
    return Tester;
}());
var factory = (function () {
    return {
        create: function (arg) {
            var emp = new arg();
            return emp;
        }
    };
})();
var e1 = factory.create(Manager);
console.log(e1);
var e2 = factory.create(Developer);
console.log(e2);
var e3 = factory.create(Tester);
console.log(e3);
