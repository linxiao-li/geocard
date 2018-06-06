// routes/api/index.js
'use strict';
var express = require('express');
let router = express.Router();


module.exports = function(pool) {

	let api1Controller = require('./v1')(pool);

	router.use('/v1', api1Controller);
	return router;
};