const catchAsync = require('../utils/catchAsync');

const hello = catchAsync(async (req, res) => {
  res.send('Hello from test route');
});

module.exports = {
  hello,
};
