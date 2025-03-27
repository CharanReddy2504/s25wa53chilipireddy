var express = require('express');
var router = express.Router();

// Step 2: Declare variables
let ratio = 0.75;
let acc = 1000;

// Step 3: Modify the router callback
router.get('/', (req, res) => {
    acc = acc * ratio;  // Multiply acc by ratio

    // Step 4: Send the updated value as a response using string interpolation
    res.send(`Value is: ${acc}`);
});

module.exports = router;



