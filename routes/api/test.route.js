const express = require('express');
const testController = require('../../controllers');
const router = express.Router();

router.get('/', testController.testController.hello);

module.exports = router;
