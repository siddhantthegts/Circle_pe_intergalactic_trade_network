const { objectId } = require('./custom.validation');
const Joi = require('joi');

const createTrade = {
  body: Joi.object().keys({
    type: Joi.string().required().valid('buy', 'sell'),
    goods: Joi.array().required(),
    user: Joi.string().required(),
    shares: Joi.number().required(),
    price: Joi.number().integer().required(),
    time: Joi.date().max('now').default(new Date(Date.now())),
    symbol: Joi.string(),
  }),
};

const deleteTrade = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createTrade,
  deleteTrade,
};
