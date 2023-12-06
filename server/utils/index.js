module.exports = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      const errorMessage = error.details[0].message.replace(/"/g, '');
      res.status(400).json({ error: errorMessage });
    } else {
      next();
    }
  };
};
