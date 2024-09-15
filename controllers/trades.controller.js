const { tradeService } = require('../services');
const catchAsync = require('../utils/catchAsync');
const httpStatusCodes = require('http-status-codes');

const createTrade = catchAsync(async (req, res) => {
  const trade = await tradeService.createTrade(req.body);
  res.status(httpStatusCodes.StatusCodes.CREATED).send({
    code: httpStatusCodes.StatusCodes.CREATED,
    data: trade,
  });
});

const getTrade = catchAsync(async (req, res) => {
  const tradeList = await tradeService.getTrade();
  res.status(httpStatusCodes.StatusCodes.OK).send({
    code: httpStatusCodes.StatusCodes.OK,
    data: tradeList,
  });
});

const getTradeByID = catchAsync(async (req, res) => {
  const trade = await tradeService.getTradeById(req.params.id);
  res.send({
    code: httpStatusCodes.StatusCodes.OK,
    data: trade,
  });
});

const deleteTrade = catchAsync(async (req, res) => {
  await tradeService.deleteTrade(req.params.id);
  res.status(httpStatusCodes.StatusCodes.NO_CONTENT).send();
  res.send('Cargo Deleted Successfully!');
});

module.exports = {
  createTrade,
  getTrade,
  deleteTrade,
  getTradeByID,
};
