const Joi = require('joi');

const transactionSchema = Joi.object({
  amount: Joi.number().integer().min(1),
  description: Joi.string().min(4).max(75),
  fromAccount: Joi.string(),
  toAccount: Joi.string(),
}).custom((value, helpers) => {
  const { fromAccount, toAccount } = value;

  if (fromAccount === toAccount) {
    return helpers.message('From and to accounts cannot be the same');
  }

  return value;
});

module.exports = transactionSchema;
