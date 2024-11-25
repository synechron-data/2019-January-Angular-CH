function Employee(name) {
    this.name = name;

    this.getName = function () {
        return this.name;
    }

    this.setName = function (name) {
        this.name = name;
    }
}

var e1 = new Employee("Manish");
console.log(e1.getName());
e1.setName("Abhijeet");
console.log(e1.getName());

var e2 = new Employee("Subodh");
console.log(e2.getName());
e2.setName("Ramakant");
console.log(e2.getName());
    