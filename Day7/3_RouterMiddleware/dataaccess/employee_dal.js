const empArr = [{ id: 1, name: "Manish" },
{ id: 2, name: "Abhijeet" },
{ id: 3, name: "Ram" },
{ id: 4, name: "Abhishek" },
{ id: 5, name: "Ramakant" }];

module.exports.getAllEmployees = function () {
    return empArr;
}

module.exports.getEmployeeById = function (id) {
    return empArr.find(e => e.id == id);
}