const express = require('express');
const router = express.Router();

const apiCtrl = require('../controllers/apiController');

router.get('/employees', apiCtrl.getEmployees);
router.get('/employees/:id', apiCtrl.getEmployeeById);

module.exports = router;