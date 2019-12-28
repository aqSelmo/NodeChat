const { check, validationResult } = require('express-validator');
module.exports = (application)=>{
    application.post('/chat', [
        check('apelido').isLength({ min: 5 })
    ], (req, res)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return application.app.controllers.chat.home(application, req, res, errors);;
        }
        application.app.controllers.chat.home(application, req, res);
    });
}