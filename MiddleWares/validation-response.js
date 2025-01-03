const { validationResult } = require('express-validator');

const handleValidateErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json( errors.array().map(err => ({
      msg:err.msg
    })) );
  }
  next();
};

module.exports = { handleValidateErrors }
