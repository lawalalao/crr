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
import PersonnalInfo from "./PersonnalInfo";
import Setting from "./Setting";


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
          <Route path="/setting">
            <Setting />
          </Route>
          <Route path="/personnalinfo">
            <PersonnalInfo />
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
