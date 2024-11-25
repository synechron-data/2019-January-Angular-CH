module.exports.isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('./accounts/login');
}

module.exports.login_get = function (req, res, next) {
    res.render('accounts/login', { title: "Login View", message: req.flash('loginMessage') });
}

module.exports.login_post = function (passport) {
    return passport.authenticate('local-login', {
        successRedirect: '/users',
        failureRedirect: '/accounts/login',
        failureFlash: true
    });
}