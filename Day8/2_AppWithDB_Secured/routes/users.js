var express = require('express');
var router = express.Router();

var users_controller = require('../controllers/usersController');
var accounts_controller = require('../controllers/accountsController');

router.get('/', accounts_controller.isAuthenticated, function (req, res, next) {
  var qs = req.query.msg;
  res.redirect('users/index?msg=' + qs);
});

router.get('/index', accounts_controller.isAuthenticated, users_controller.index);

router.get('/create', accounts_controller.isAuthenticated, users_controller.create_get);

router.post('/create', accounts_controller.isAuthenticated, users_controller.create_post);

router.get('/edit/:id', accounts_controller.isAuthenticated, users_controller.edit_get);

router.post('/edit/:id', accounts_controller.isAuthenticated, users_controller.edit_post);

router.get('/delete/:id', accounts_controller.isAuthenticated, users_controller.delete_get);

router.post('/delete/:id', accounts_controller.isAuthenticated, users_controller.delete_post);

module.exports = router;