const emp_dal = require('../dataaccess/employee_dal');

module.exports.getEmployees = function (req, res, next) {
    res.json(emp_dal.getAllEmployees());
};

module.exports.getEmployeeById = function (req, res, next) {
    res.json(emp_dal.getEmployeeById(req.params.id));
};