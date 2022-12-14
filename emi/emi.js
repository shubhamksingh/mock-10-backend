// express route
const express = require('express');
const router = express.Router();


// get request
router.post('/', (req, res) => {
    // get principal, rate, time from request body
    let {original, rate, time} = req.body;
    // calculate emi
    rate = +rate;
    rate = rate / (12 * 100);
    original = +original;
    time = +time;
    
    let emi = (original * rate *(1+rate)*time) / ((1+rate)*time - 1);
    // send emi
    res.status(200).json({
        message: 'EMI calculated successfully',
        emi: emi
    });
    }
);





// export router
module.exports = router;
