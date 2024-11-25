const express = require('express');
const router = express.Router();

const homeCtrl = require('../controllers/homeController');
const empCtrl = require('../controllers/employeeController');

router.get('/', homeCtrl.index);
router.get('/employees', empCtrl.index);

module.exports = router;