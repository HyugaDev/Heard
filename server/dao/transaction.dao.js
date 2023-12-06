const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { transaction } = prisma;

async function listTransactions({ page = 1, pageSize = 10 } = {}) {
  try {
    const skip = (page - 1) * pageSize;

    const transactions = await prisma.transaction.findMany({
      skip,
      take: pageSize,
    });

    const totalTransactions = await prisma.transaction.count();

    return {
      transactions,
      currentPage: page,
      pageSize,
      totalPages: Math.ceil(totalTransactions / pageSize),
    };
  } catch (error) {
    throw new Error('Error fetching transactions');
  }
}

async function addTransaction(transactionObj) {
  return transaction.create({
    data: { ...transactionObj },
  });
}

async function updateTransaction(transactionId, updatedData) {
  return transaction.update({
    where: { transactionId: transactionId },
    data: { ...updatedData },
  });
}

function deleteTransaction(transactionId) {
  return transaction.delete({
    where: {
      transactionId: transactionId,
    },
  });
}

module.exports = {
  listTransactions,
  addTransaction,
  updateTransaction,
  deleteTransaction,
};
