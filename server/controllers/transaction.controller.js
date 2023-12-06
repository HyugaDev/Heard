const transactionService = require('../dao/transaction.dao');

async function getTransactions(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;

    const result = await transactionService.listTransactions({
      page,
      pageSize,
    });

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}

async function addTransaction(req, res) {
  try {
    const transactionDate = new Date().toISOString().split('T')[0];
    const transactionObj = { ...req.body, transactionDate };
    const data = await transactionService.addTransaction(transactionObj);
    res.json({
      message: 'Successfully created a transaction',
      transaction: data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}

async function updateTransaction(req, res) {
  try {
    const transactionId = req.params.id;
    const data = req.body;

    const response = await transactionService.updateTransaction(
      transactionId,
      data
    );

    res.json({
      message: 'Successfully updated the transaction',
      transaction: response,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}

async function deleteTransaction(req, res) {
  try {
    const transactionId = req.params.id;

    const deletedTransaction = await transactionService.deleteTransaction(
      transactionId
    );

    if (!deletedTransaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }

    res.json({
      message: 'Transaction deleted successfully',
      deletedTransaction,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = {
  getTransactions,
  addTransaction,
  updateTransaction,
  deleteTransaction,
};
