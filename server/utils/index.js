module.exports = (schema) => {
  return (req, res, next, schema) => {
    const { error, value } = schema.validate(req.body);
    if (error) {
      res.send(error);
    } else next();
  };
};
