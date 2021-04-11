import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
// import AuthContext from './services/authContext';

const routes = () => {
//   const { isLogged } = useContext(AuthContext);
  const isLogged = true;
  return (
    <Switch>
      <Route exact path="/">
        {isLogged ? <Redirect push to="/dashboard" /> : <Login />}
      </Route>
      <Route exact path="/dashboard">
        {!isLogged ? <Redirect push to="/" /> : <Dashboard />}
      </Route>
    </Switch>
  );
};
export default routes;
