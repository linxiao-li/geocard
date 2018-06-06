// routes/index.js
'use strict';
import express from 'express';
const router = express.Router();

module.exports = function(app,pool){

    let apiRoute = require('./api')(pool);

    app.use('/api',apiRoute);

    
}