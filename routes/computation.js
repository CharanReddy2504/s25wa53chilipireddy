var express = require('express');
var router = express.Router();

/* GET computation page. */
router.get('/', function(req, res, next) {
  let x = parseFloat(req.query.x);
  
  // If x is not provided or is invalid, generate a random value between 1 and 100
  if (isNaN(x)) {
    x = Math.floor(Math.random() * 100) + 1;
  }

  // Apply the Math.log10 function
  const y = Math.log10(x);

  // Format the result
  const result = `log10 applied to ${x} is ${y}`;

  res.send(result);
});

module.exports = router;
