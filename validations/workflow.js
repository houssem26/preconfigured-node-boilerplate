const { celebrate, Joi } = require('celebrate');

const validatePost = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string(),
    status: Joi.number().integer(),
    categories: Joi.array().items(Joi.number().integer()).required(),
    variants: Joi.array().items(Joi.number().integer()),
  }),
})
const validateFilter = celebrate({
    query: Joi.object().keys({
        name: Joi.string(),
        status: Joi.number().integer(),
        categories: Joi.array().items(Joi.number().integer()),
      }),
})
module.exports = {
    validatePost,
    validateFilter
}