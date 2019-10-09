import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Index from './components/Index';
import Login from './components/Login';
import Registration from './components/Registration';
import DashBoard from './components/Dashboard/dashboard';
import Alert from './components/Alert';
import { loadUser } from './store/actions/auth';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/Routing/PrivateRoute';

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
     <Route exact path="/" render={() => <Index />} />
     <Route path="/login" render={() => <Login />} />
     <Route path="/register" render={() => <Registration />} />
     <PrivateRoute path="/dashboard" component={DashBoard} />
   </Switch>
   </>
  );
}

export default App;
