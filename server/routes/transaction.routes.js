const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const TransactionCtrl = require('../controllers/transaction.controller');
const transactionSchema = require('../validators/transaction.validator');
const schemaValidator = require('../utils');

router.get('/', asyncHandler(TransactionCtrl.getTransactions));

router.post(
  '/',
  schemaValidator(transactionSchema),
  asyncHandler(TransactionCtrl.addTransaction)
);

router.patch(
  '/:id',
  schemaValidator(transactionSchema),
  asyncHandler(TransactionCtrl.updateTransaction)
);

router.delete('/:id', asyncHandler(TransactionCtrl.deleteTransaction));

module.exports = router;
