const { HttpStatusCode } = require('axios');
const { tradeModel } = require('../models');
const ApiError = require('../utils/ApiError');
const createTrade = async (tradeBody) => {
  return await tradeModel.create(tradeBody);
};

const getTrade = async (trade) => {
  const tradeList = await tradeModel.find({});

  return tradeList;
};

const getTradeById = async (id) => {
  return tradeModel.findById(id);
};

const deleteTrade = async (id) => {
  const tradeById = await getTradeById(id);
  if (!tradeById) {
    throw new ApiError(HttpStatusCode.NotFound, 'Trade not found');
  }
  tradeById.deleteOne();
  return tradeById;
};

module.exports = {
  createTrade,
  getTrade,
  getTradeById,
  deleteTrade,
};
