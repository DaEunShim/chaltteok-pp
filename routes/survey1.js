var express = require('express');
var router = express.Router();
const inputControllers = require('../controllers/inputControllers');

router.get('/', inputControllers.answer1);

module.exports = router;
