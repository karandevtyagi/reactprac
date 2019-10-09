import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import Index from './components/Index';
import Login from './components/Login';
import Registration from './components/Registration';
import DashBoard from './components/Dashboard/dashboard';
import Alert from './components/Alert';
import { loadUser } from './store/actions/auth';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/Routing/PrivateRoute';
import AddressComponent from './components/Dashboard/AddressComponent';
import Product from './components/Product/productdisplay';
import Cart from './components/Product/cart';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  });
  return (
   <>

   <Alert />
   <Switch>
     <Route exact path="/" component={Index} />
     <Route path="/login" component={Login} />
     <Route path="/product/:id/" component={Product} />
     <Route path="/register" component={Registration} />
     <PrivateRoute path="/dashboard" component={DashBoard} />
     <PrivateRoute path="/address" component={AddressComponent} />
     <PrivateRoute path="/cart" component={Cart} />
   </Switch>
   </>
  );
}

export default hot(App);
