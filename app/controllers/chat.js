module.exports.home = (application, req, res, errors)=>{
    if(errors){
        console.log(errors.array())
        return res.render('index', {
            error : errors.array()
        });
    }
    res.render('chat', {
        user : req.body.apelido
    });
}