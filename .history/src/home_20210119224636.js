import React from "react";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Grid} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import "./home.css";
import {deliveryManInfo} from "./api";

import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function Home() {
    
    const btnstyle = { margin: "15px 0", height: "10vh", width: "250px" , backgroundColor:"#1460BD", color:"#FFFFFF", boxShadow:" 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"};
    const btnstyle1 = { margin: "15px 0", height: "10vh", width: "250px" , backgroundColor:"white", color:"#1460BD", boxShadow:" 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"};
    const user = sessionStorage.getItem('user')
    
    deliveryManInfo(user).then(data =>{
        localStorage.setItem('name', data.firstName)

    })      
    const Nom = localStorage.getItem('name') 
    function logout(event){
        event.preventDefault();
        console.log('deconnexion')
        localStorage.clear();
        window.location.href = '/';
    }

    return (
        <div className="homeContainer">
                <Grid>
                    <div className="homeHeader">
                        <div className="homeHeader_icon">
                            <AccountCircleIcon />
                        </div>
                        <div className="homeHeader_text">
                            <h4>{Nom}</h4>
                        </div>
                        <div className="homeHeader_notificationIcon">
                            <NotificationsActiveIcon />
                        </div>
                    </div>
                        <div className="homeButton">
                            <div className="homeButton1">
                                <div className="v">
                                    <Link to="/CommandeEnCours">
                                    <Button
                                        variant="contained"
                                        size="large"
                                        color="default"
                                        style={btnstyle1}
                                    >
                                        Commande en cours...
                                    </Button>
                                </Link>
                                <Link to="/ReceivedDeliveries">
                                    <Button
                                        variant="contained"
                                        size="large"
                                        color="default"
                                        style={btnstyle}
                                    >
                                        Commandes Recues
                                    </Button>
                                </Link>
                                </div>
                                <Link to="/historique">
                                    <Button
                                        variant="contained"
                                        size="large"
                                        color="default"
                                        style={btnstyle}
                                    >
                                        Historique
                                    </Button>
                                </Link>
                            </div>
                            <div className="homeButton2">
                                <Link to="/PersonnalInfo">
                                    <Button
                                        variant="contained"
                                        size="large"
                                        color="default"
                                        style={btnstyle}
                                    >
                                        Info Personnelles
                                    </Button>
                                </Link>
                                 
                            </div>
                            <div className="logoutApp">
                                <button  onClick={logout}  type="button">Deconnexion <ExitToAppIcon /></button>
                                
                            </div>
                      
                        </div>
                    </Grid>
        </div>
    );
}

export default Home;
