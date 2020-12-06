import React from "react";
import './App.css';
import Authentification from './Authentification';
import Home from './home'
import Header from './Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReceivedDeliveries from "./ReceivedDeliveries";
import Delivery from './Delivery';


function App() {
  return (
    <div>
      <Router>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/ReceivedDeliveries">
         
            <ReceivedDeliveries backButton="/home"/>
          </Route>
          <Route path="/delivery">
            
            <Delivery />
          </Route>
          <Route path="/">
            <Authentification />
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
