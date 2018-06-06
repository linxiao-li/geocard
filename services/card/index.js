'use strict'
module.exports = function(pool){
    module.getAllCardsREST  = async(req,res,next)=>{
        let sql = 'SELECT * FROM Cards';
        pool.query(sql,[],function(err,result){
            if(err){
                return next(err);
            }else{
                return res.json(result);
            }
        })
    }
    return module
}