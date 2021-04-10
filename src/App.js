import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/login'
import Dashboard from './pages/dashboard'


let  isLogged = true

function App() {
  return (
    <BrowserRouter>
      <Switch>
         <Route exact path="/">
            {isLogged ? <Redirect push to="/dashboard"/> : <Login/>}
         </Route>
         <Route exact path="/dashboard">
            {!isLogged ? <Redirect push to="/"/> : <Dashboard/>}
         </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
