const express = require('express');
const cargoValidation = require('../../validations/cargo.validation');
const cargoController = require('../../controllers/cargo.controller');
const { validate } = require('../../utils/validate');

const router = express.Router();

router
  .route('/')
  .post(validate(cargoValidation.createCargo), cargoController.createCargo)
  .get(cargoController.getCargo);

router
  .route('/:id')
  .post(validate(cargoValidation.deleteTrade), cargoController.deleteCargo)
  .get(cargoController.getCargoByID);

module.exports = router;
