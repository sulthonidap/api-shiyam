const express = require('express');
const serverless = require('serverless-http');
const app = express();

// Import routes
app.use(express.json());
app.use('/users', require('../src/routes/users'));
app.use('/pemeriksaan', require('../src/routes/pemeriksaan'));
app.use('/staff', require('../src/routes/staff'));

module.exports = serverless(app); 