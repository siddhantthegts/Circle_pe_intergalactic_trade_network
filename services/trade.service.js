const { Trade } = require('../models');
const ApiError = require('../utils/ApiError');
const httpStatusCode = require('http-status-codes');

const createTrade = async (tradeBody) => {
  return await tradeModel.create(tradeBody);
};

const getTrade = async (trade) => {
  const tradeList = await Trade.find({});

  return tradeList;
};

const getTradeById = async (id) => {
  return Trade.findById(id);
};

const deleteTrade = async (tradeid) => {
  const tradeById = await getTradeById(tradeid);
  console.log(tradeid);
  if (!tradeById) {
    throw new ApiError(httpStatusCode.StatusCodes.NOT_FOUND, 'Trade not found');
  }
  await tradeById.deleteOne();
  return tradeById;
};

module.exports = {
  createTrade,
  getTrade,
  getTradeById,
  deleteTrade,
};
