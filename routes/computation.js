// Importing required modules
const express = require('express');
const router = express.Router();

// Function to generate a random value
function generateRandomValue() {
    return Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
}

// Function to apply Math function based on the last digit of SID (3 in '580653')
function applyMathFunction(x) {
    const lastDigit = 3; // Last digit of the SID (580653)
    let fn, y;

    switch(lastDigit) {
        case 1:
            fn = 'sin';
            y = Math.sin(x);
            break;
        case 2:
            fn = 'cos';
            y = Math.cos(x);
            break;
        case 3:
            fn = 'tan';
            y = Math.tan(x);
            break;
        case 4:
            fn = 'sqrt';
            y = Math.sqrt(x);
            break;
        case 5:
            fn = 'abs';
            y = Math.abs(x);
            break;
        default:
            fn = 'sqrt';
            y = Math.sqrt(x); // Default function if the SID last digit is not matched
    }

    return { fn, y };
}

// Handling the GET request to /computation
router.get('/computation', function(req, res) {
    let x = req.query.x ? parseFloat(req.query.x) : generateRandomValue();  // If x exists in query, use it, else generate random value
    const { fn, y } = applyMathFunction(x); // Get the function and result
    
    // Sending the result as a string
    res.send(`${fn} applied to ${x} is ${y}`);
});

module.exports = router;

