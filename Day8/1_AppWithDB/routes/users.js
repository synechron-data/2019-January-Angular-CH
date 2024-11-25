var express = require('express');
var router = express.Router();

var users_controller = require('../controllers/usersController');

router.get('/', function (req, res, next) {
  var qs = req.query.msg;
  res.redirect('users/index?msg=' + qs);
});

router.get('/index', users_controller.index);

router.get('/create', users_controller.create_get);

router.post('/create', users_controller.create_post);

router.get('/edit/:id', users_controller.edit_get);

router.post('/edit/:id', users_controller.edit_post);

router.get('/delete/:id', users_controller.delete_get);

router.post('/delete/:id', users_controller.delete_post);

module.exports = router;