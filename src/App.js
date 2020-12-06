import React from "react";
import './App.css';
import Authentification from './Authentification';
import Home from './home'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div>
      <Home />
 
    </div>
  );
}

export default App;
