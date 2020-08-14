const express = require('express');
const router = express.Router();
const controller = require('./word.controller');

router.post('/', controller.setWord);

module.exports = router;