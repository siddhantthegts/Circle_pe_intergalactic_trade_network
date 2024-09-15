const tradeRoute = require('./trade.route');
const testRoute = require('./test.route');
const express = require('express');
const router = express.Router();

const defaultRoute = [
  {
    path: '/trade',
    route: tradeRoute,
  },
  {
    path: '/test',
    route: testRoute,
  },
];

defaultRoute.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
