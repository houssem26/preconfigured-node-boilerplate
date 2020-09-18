const { celebrate, Joi } = require('celebrate');

const validatePost = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string(),
    logo: Joi.string(),
    createdAt: Joi.string(),
    updatedAt: Joi.string(),
    status: Joi.boolean(),
    parent_category_id: Joi.number().integer()
  }),
})
module.exports = {
    validatePost
}