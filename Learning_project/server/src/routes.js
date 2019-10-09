const AuthenticationController=require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy=require('./policies/AuthenticationControllerPolicy')
const isAuthneticated=require('./policies/isAuthenticated')
const Welcome=require('./controllers/Welcome')
const ProfileController=require('./controllers/ProfileController')
const addressController=require('./controllers/addressController')
const productController=require('./controllers/productController')
const CartController=require('./controllers/cartController')

module.exports=(app)=>{
    app.post('/register',AuthenticationControllerPolicy.register,
    AuthenticationController.register),
    app.post('/login',
    AuthenticationController.login),
    app.get('/user',isAuthneticated,Welcome.index),
    app.post('/profile',isAuthneticated,ProfileController.index),
    app.get('/profile/address',isAuthneticated,addressController.index),
    app.get('/profile/address/:addressId',isAuthneticated,addressController.show)
    app.post('/profile/address',isAuthneticated,addressController.post),
    app.delete('/profile/address/delete/:addressId',isAuthneticated,addressController.remove),
    app.post('/profile/address/update/:addressId',isAuthneticated,addressController.update),
    app.post('/p/update',isAuthneticated,ProfileController.passwordUpdate)
    app.get('/products',productController.index),
    app.get('/products/:productId',productController.display),
    app.get('/cart',isAuthneticated,CartController.index),
    app.post('/cart',isAuthneticated,CartController.post),
    app.delete('/cart/:cartId',isAuthneticated,CartController.remove)

}