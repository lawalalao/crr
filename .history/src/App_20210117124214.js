import React from "react";
import "./App.css";
import Authentification from "./Authentification";
import Home from "./home";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ReceivedDeliveries from "./ReceivedDeliveries";
import DeliveryInformation from "./DeliveryInformation";
import PersonnalInfo from "./PersonnalInfo";
import Setting from "./Setting";
import History from "./history";
import DeliveryStatus from "./DeliveryStatus";
import OnProgressDelivery from "./OnProgressDelivery"
function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>

                    <Route path="/ReceivedDeliveries">
                        <ReceivedDeliveries backButton="/home" />
                    </Route>
                    <Route path="/CommandeEnCours">
                        <OnProgressDelivery backButton="/home" />
                    </Route>
                    <Route path="/DeliveryInformation">
                        <DeliveryInformation backButton="/ReceivedDeliveries" />
                    </Route>
                    <Route path="/DeliveryStatus">
                        <DeliveryStatus backButton="/ReceivedDeliveries" />
                    </Route>
                    <Route path="/historique">
                        <History backButton="/home" />
                    </Route>
                    <Route path="/delivery">
                        <DeliveryInformation />
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
