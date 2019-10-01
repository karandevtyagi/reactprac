import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Panel from './components/Panel';
import Login from './components/Login';
import Registration from './components/Registration';

function App() {
  return (
   <>
   {/* <Panel /> */}
   <Switch>
     <Route exact path="/" render={() => <Panel />} />
     <Route path="/login" render={() => <Login />} />
     <Route path="/registration" render={() => <Registration />} />
   </Switch>
   </>
  );
}

export default App;
