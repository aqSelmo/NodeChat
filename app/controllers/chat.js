module.exports.home = (application, req, res)=>{
    
    req.assert('apelido', 'Apelido é obrigatório.').notEmpty();
    
    console.log(req.validationErrors);
    
    res.render('chat', {
        user : req.body.apelido
    });
}