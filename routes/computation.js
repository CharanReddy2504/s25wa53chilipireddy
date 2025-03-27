var express = require('express');
var router = express.Router();

// Random value generator helper function
function generateRandomValue() {
    return Math.floor(Math.random() * 100);  // Generates a random number between 0 and 99
}

// Determine the function to apply based on the last digit of SID (3 in this case)
function applyMathFunction(x) {
    let fn;
    let y;

    // Based on the last digit of SID (3), we'll apply the Math.sqrt function
    fn = 'Math.sqrt';
    y = Math.sqrt(x);

    return { fn, x, y };
}

// /computation endpoint
router.get('/computation', (req, res) => {
    let x = req.query.x ? parseFloat(req.query.x) : generateRandomValue(); // Use query x if provided, else random value
    let { fn, y } = applyMathFunction(x);

    res.send(`${fn} applied to ${x} is ${y}`);
});

module.exports = router;
