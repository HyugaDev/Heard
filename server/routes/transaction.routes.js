const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const TransactionCtrl = require('../controllers/transaction.controller');

router.get('/', asyncHandler(TransactionCtrl.getTransactions));

module.exports = router;
