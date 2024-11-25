var fname = "Manish";
var lname = "Sharma";

// module.exports = fname;
// module.exports = lname;

module.exports.firstname = fname;
module.exports.lastname = lname;

module.exports.log = function(msg){
    console.log(msg);
}

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

module.exports.Employee = Employee;
