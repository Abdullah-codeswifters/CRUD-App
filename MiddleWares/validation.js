const { body } = require('express-validator');

const blogValidationRules = [
  body('title')
    .notEmpty().withMessage('Title is required')
    .isString().withMessage('Title must be a string')
    .isLength({ min: 3, max: 100 }).withMessage('Title must be between 3 and 100 characters')
    .custom(async(value,{req}) => {
      console.log('=----- value', value, '---- type ', typeof(value),'---- req',req.body)
      return value
    }),
  body('author')
    .trim()
    .notEmpty().withMessage('Author is required')
    .isString().withMessage('Author must be a string')
    .isLength({ min: 3, max: 100 }).withMessage('Author must be between 3 and 100 characters'),
  body('content')
    .optional({ checkFalsy: true })
    .isString().withMessage('Content must be a string')
    .isLength({ min: 3, max: 1000 }).withMessage('Content cannot exceed 1000 characters'),
];

module.exports = { blogValidationRules };

