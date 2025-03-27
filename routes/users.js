const express = require('express');
const router = express.Router();

// Variables initialized
let ratio = 0.75;
let acc = 1000;

// Endpoint to modify and display acc value
router.get('/', function(req, res, next) {
  acc *= ratio;
  res.send(`Value is: ${acc}`);
});

module.exports = router;

