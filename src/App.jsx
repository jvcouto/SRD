import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './Routes';
// import { AuthProvider } from './services/authContext';

const App = () => (
  <Router>
    <routes />
  </Router>
);

export default App;
