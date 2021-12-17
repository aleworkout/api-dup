const mongoose = require('../database');

const PaymentSchema = new mongoose.Schema({
    /*
    paid: {
        type: Boolean,
        default: false,
    },*/

    data: Object,

    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Payment = mongoose.model('Payment', PaymentSchema);

module.exports = Payment;