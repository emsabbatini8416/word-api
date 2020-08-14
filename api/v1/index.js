const express = require('express');
const router = express.Router();

router.use('/word', require('./word'));

module.exports = router;