const { Router } = require('express');
const router = Router();

const paymentController = require('../controller/payment.controller');

router
    .post('/create-order', paymentController.createOrder)
    .get('/capture-order', paymentController.captureOrder)
    .get('/cancel-order', paymentController.cancelOrder);

module.exports = router;