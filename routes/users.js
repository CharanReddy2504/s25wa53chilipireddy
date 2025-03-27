const express = require('express');
const router = express.Router();

// Step 2: Initialize ratio and acc variables
let ratio = 0.75;
let acc = 1000;

// Step 3: Modify the router callback function
router.get('/users', (req, res) => {
    acc = acc * ratio;  // Multiply acc by ratio and store it back in acc

    // Step 4: Send response with the updated acc value using string interpolation
    res.send(`Value is: ${acc}`);
});

module.exports = router;


