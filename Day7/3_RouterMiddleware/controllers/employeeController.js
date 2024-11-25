const emp_dal = require('../dataaccess/employee_dal');

module.exports.index = function (req, res, next) {
    res.render('employees', {
        ptitle: "Employees View",
        empList: emp_dal.getAllEmployees()
    });
};