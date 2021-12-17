const express = require('express');

const Payment = require('../models/Payment');

const router = express.Router();

router.post('/payment', async (req, res) => {
    try {
        const payment = await Payment.create(req.body);

        return res.send({ payment });
    } catch (err) {
        return res.status(400).send({ error: 'Payment Registration failed' });
    }
});


module.exports = app => app.use('/register', router);
