const { Cargo } = require('../models');
const ApiError = require('../utils/ApiError');
const httpStatusCode = require('http-status-codes');

const createCargo = async (cargoBody) => {
  return await Cargo.create(cargoBody);
};
const getCargo = async (cargo) => {
  const cargoList = await Cargo.find({});

  return cargoList;
};

const getCargoById = async (id) => {
  return Cargo.findById(id);
};

const deleteCargo = async (cargoid) => {
  const cargoById = await getCargoById(cargoid);
  if (!cargoById) {
    throw new ApiError(httpStatusCode.StatusCodes.NOT_FOUND, 'Cargo not found');
  }
  await cargoById.deleteOne();
  return cargoById;
};

module.exports = {
  getCargoById,
  deleteCargo,
  getCargo,
  createCargo,
};
