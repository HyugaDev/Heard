const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { transaction } = prisma;

function listTransactions() {
  return transaction.findMany();
}

module.exports = {
  listTransactions,
};
