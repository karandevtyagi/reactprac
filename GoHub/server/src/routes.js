const AuthenticationController=require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy=require('./policies/AuthenticationControllerPolicy')
const isAuthneticated=require('./policies/isAuthenticated')
const DashboardController=require('./controllers/DashboardController')
module.exports=(app)=>{
    app.post('/register',AuthenticationControllerPolicy.register,
    AuthenticationController.register),
    app.post('/login',
    AuthenticationController.login),
    app.get('/dashboard',isAuthneticated,DashboardController.message)
}