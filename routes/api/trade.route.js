const express = require('express');
const tradesValidation = require('../../validations/trades.validate');
const tradeController = require('../../controllers/trades.controller');
const { validate } = require('../../utils/validate');

const router = express.Router();

router
  .route('/')
  .post(validate(tradesValidation.createTrade), tradeController.createTrade)
  .get(tradeController.getTrade);

router
  .route('/:id')
  .post(validate(tradesValidation.deleteTrade), tradeController.deleteTrade)
  .get(tradeController.getTradeByID);

module.exports = router;
