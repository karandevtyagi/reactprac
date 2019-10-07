import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Panel from './components/Panel';
import Login from './components/Login';
import Registration from './components/Registration';
import Alert from './components/Alert';

function App() {
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
