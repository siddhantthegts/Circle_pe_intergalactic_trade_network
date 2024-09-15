const { default: mongoose, models } = require('mongoose');
const toJSON = require('./plugin/toJson');

const cargoSchema = mongoose.Schema({
  cargoType: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    require: true,
  },
  deliveredTo: {
    type: String,
    required: true,
  },
  currentStatus: {
    type: String,
    required: true,
  },
  numberOfPackages: {
    type: Number,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  goodsDescription: {
    type: String,
  },
  invoiceValue: {
    type: Number,
    required: true,
  },
});

cargoSchema.plugin(toJSON);
const Cargo = mongoose.model('Cargo', cargoSchema);

module.exports = Cargo;
