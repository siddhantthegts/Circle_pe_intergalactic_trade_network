const tradeRoute = require('./trade.route');
const testRoute = require('./test.route');
const cargoRoute = require('./cargo.route');
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
  {
    path: '/cargo',
    route: cargoRoute,
  },
];

defaultRoute.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
