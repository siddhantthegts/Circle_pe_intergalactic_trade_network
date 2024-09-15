const { default: mongoose } = require('mongoose');

const tradeSchema = mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: {
      values: ['buy', 'sell'],
      message: 'Trade type is not recognised. It can either be buy or sell',
    },
  },
  goods: {
    type: Array,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  shares: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  time: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  symbol: {
    type: String,
  },
});

const Trade = mongoose.model('Trade', tradeSchema);
module.exports = Trade;
