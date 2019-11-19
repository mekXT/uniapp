var express = require('express');
var router = express.Router();
const services = require('../services.js')

router.post('/api/login',services.login);
router.post('/api/sign',services.sign);

module.exports = router;