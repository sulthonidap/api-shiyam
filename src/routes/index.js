const express = require('express');
const router = express.Router();

// Import routes modular
router.use('/users', require('./users'));
router.use('/pemeriksaan', require('./pemeriksaan'));
router.use('/staff', require('./staff'));

module.exports = router; 