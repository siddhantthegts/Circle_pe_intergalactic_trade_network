const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createCargo = {
  body: Joi.object().keys({
    cargoType: Joi.string().required(),
    user: Joi.string().required(),
    deliveredTo: Joi.string().required(),
    currentStatus: Joi.string().required(),
    numberOfPackages: Joi.number().integer().required(),
    goodsDescription: Joi.string(),
    invoiceValue: Joi.number().integer().required(),
    items: Joi.array().required(),
  }),
};
const deleteTrade = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createCargo,
  deleteTrade,
};
