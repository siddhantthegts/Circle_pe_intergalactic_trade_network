const tradeRoute = require('./trade.route');
const testRoute = require('./test.route');
const cargoRoute = require('./cargo.route');
const rootRoute = require('./default.route');
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
  {
    path: '/',
    route: rootRoute,
  },
];

defaultRoute.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
