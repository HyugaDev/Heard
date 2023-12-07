const Joi = require('joi');

const transactionSchema = Joi.object({
  title: Joi.string().required(),
  amount: Joi.number().integer().min(1).required(),
  description: Joi.string().required(),
  fromAccount: Joi.string().required(),
  toAccount: Joi.string().required(),
}).custom((value, helpers) => {
  const { fromAccount, toAccount } = value;

  if (fromAccount === toAccount) {
    return helpers.message('From and to accounts cannot be the same');
  }

  return value;
});

module.exports = transactionSchema;
