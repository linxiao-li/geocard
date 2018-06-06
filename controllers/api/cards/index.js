import express from 'express';
let router = express.Router();
module.exports = function(pool){

    const cardService = require('../../../services/card')(pool);
    
    router.get('/allCards',cardService.getAllCardsREST);

    return router;
}