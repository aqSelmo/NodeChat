module.exports = (application)=>{
    application.post('/chat', (req, res)=>{
        application.app.controllers.chat.home(application, req, res);
    });
}// JavaScript Document