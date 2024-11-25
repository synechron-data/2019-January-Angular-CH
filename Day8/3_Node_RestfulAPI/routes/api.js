var express = require('express');
var router = express.Router();

var users_controller = require('../controllers/usersController');
var accounts_controller = require('../controllers/accountsController');

router.get('/users', accounts_controller.verify, users_controller.index);

router.post('/authenticate', accounts_controller.authenticate);

module.exports = router;