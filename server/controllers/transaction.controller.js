const transactionService = require('../dao/transaction.dao');

async function getTransactions(req, res) {
  const transactions = await transactionService.listTransactions();
  res.send(transactions);
}

module.exports = {
  getTransactions,
};
