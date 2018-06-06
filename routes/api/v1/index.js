// routes/api/v2/index.js
'use strict';
const express = require('express');
let router = express.Router();


module.exports = function(pool) {

	const cardController = require('../../../controllers/api/cards')(pool);

	router.use('/cards', cardController);

	return router;
};