const { cargoService } = require('../services');
const catchAsync = require('../utils/catchAsync');
const httpStatusCodes = require('http-status-codes');

const createCargo = catchAsync(async (req, res) => {
  const cargo = await cargoService.createCargo(req.body);
  res.status(httpStatusCodes.StatusCodes.CREATED).send({
    code: httpStatusCodes.StatusCodes.CREATED,
    data: cargo,
  });
});

const getCargo = catchAsync(async (req, res) => {
  const cargoList = await cargoService.getCargo();
  res.status(httpStatusCodes.StatusCodes.OK).send({
    code: httpStatusCodes.StatusCodes.OK,
    data: cargoList,
  });
});

const getCargoByID = catchAsync(async (req, res) => {
  const cargo = await cargoService.getCargoById(req.params.id);
  res.send({
    code: httpStatusCodes.StatusCodes.OK,
    data: cargo,
  });
});

const deleteCargo = catchAsync(async (req, res) => {
  await cargoService.deleteCargo(req.params.id);
  res.status(httpStatusCodes.StatusCodes.NO_CONTENT).send();
  res.send('Cargo Deleted Successfully!');
});

module.exports = {
  createCargo,
  deleteCargo,
  getCargo,
  getCargoByID,
};
