const AuthenticationController=require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy=require('./policies/AuthenticationControllerPolicy')
const isAuthneticated=require('./policies/isAuthenticated')
const Welcome=require('./controllers/Welcome')

module.exports=(app)=>{
    app.post('/register',AuthenticationControllerPolicy.register,
    AuthenticationController.register),
    app.post('/login',
    AuthenticationController.login),
    app.get('/user',isAuthneticated,Welcome.message)
 
}