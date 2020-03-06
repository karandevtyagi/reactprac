const productController=require('./sellerControllers/productController')
const AuthenticationController=require('./sellerControllers/AuthenticationController')
const AuthenticationControllerPolicy=require('./policies/AuthenticationControllerPolicy')
const isAuthneticated=require('./policies/isAuthenticated')
module.exports=(app)=>{
    app.post('/seller/register',AuthenticationControllerPolicy.register,
    AuthenticationController.register),
    app.post('/seller/login',
    AuthenticationController.login),
    app.post('/p',isAuthneticated,productController.addProduct),
    app.post('/c',productController.addColor),
    app.delete('/c/d',productController.removeColor)

}