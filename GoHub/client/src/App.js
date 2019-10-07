import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Panel from './components/Panel';
import Login from './components/Login';
import Registration from './components/Registration';
import Alert from './components/Alert';
import { loadUser } from './store/actions/auth';
import setAuthToken from './utils/setAuthToken';

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
   {/* <Panel /> */}
   <Alert />
   <Switch>
     <Route exact path="/" render={() => <Panel />} />
     <Route path="/login" render={() => <Login />} />
     <Route path="/register" render={() => <Registration />} />
   </Switch>
   </>
  );
}

export default App;
