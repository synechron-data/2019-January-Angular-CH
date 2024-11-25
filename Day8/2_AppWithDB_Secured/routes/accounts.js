var express = require('express');
var router = express.Router();

var accounts_controller = require('../controllers/accountsController');

module.exports = function (passport) {
    router.get('/login', accounts_controller.login_get);
    router.post('/login', accounts_controller.login_post(passport));

    return router;
};