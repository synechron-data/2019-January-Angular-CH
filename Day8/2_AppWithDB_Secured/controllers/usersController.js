const da = require('../dataaccess');

module.exports.index = function (req, res, next) {
    var msg = req.query.msg;
    da.getAllUsers().then(function (data) {
        res.render('users/index', { title: "Users View", users: data, message:msg });
    }, function (eMsg) {
        res.render('users/index', { title: "Users View" });
    })
}

module.exports.create_get = function (req, res, next) {
    res.render('users/create', { title: "Create User View" });
}

module.exports.create_post = function (req, res, next) {
    var uname = req.body.uname;
    var email = req.body.email;

    var user = { "username": uname, "email": email };

    da.insertUser(user).then(function (data) {
        res.redirect("/users?msg=Record Created...");
    }, function (eMsg) {
        console.log(eMsg);
    });
}

module.exports.edit_get = function (req, res, next) {
    let id = req.params.id;
    da.getUserById(id).then(function (data) {
        res.render('users/edit', { title: "Edit User View", userToEdit: data });
    }, function (eMsg) {
        res.render('users/edit', { title: "Edit User View" });
    })
}

module.exports.edit_post = function (req, res, next) {
    let id = req.params.id;

    var uname = req.body.uname;
    var email = req.body.email;

    var user = { "username": uname, "email": email };

    da.updateUser(id, user).then(function (data) {
        res.redirect("/users?msg=Record Updated...");
    }, function (eMsg) {
        console.log(eMsg);
    });
}

module.exports.delete_get = function (req, res, next) {
    let id = req.params.id;
    da.getUserById(id).then(function (data) {
        res.render('users/delete', { title: "Delete User View", userToDelete: data });
    }, function (eMsg) {
        res.render('users/delete', { title: "Delete User View" });
    })
}

module.exports.delete_post = function (req, res, next) {
    let id = req.params.id;
    da.deleteUser(id).then(function () {
        res.redirect("/users?msg=Record Deleted...");
    }, function (eMsg) {
        res.render('users/delete', { title: "Delete User View" });
    })
}