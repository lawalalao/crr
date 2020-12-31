import React,{useEffect} from "react";
import { Grid, Paper } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import "./home.css";
import {deliveryManInfo} from "./api";

import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";

function Home() {
    
    const btnstyle = { margin: "15px 0", height: "10vh", width: "250px" , backgroundColor:"#1460BD", color:"#FFFFFF", boxShadow:" 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"};
    const user = sessionStorage.getItem('user')
    
    deliveryManInfo(user).then(data =>{
     
        sessionStorage.setItem('name', data.firstName)
       
    })      
    const Nom = sessionStorage.getItem('name') 
    const history = useHistory();
    const paperStyle = {
        padding: 15,
        height: "90vh",
        width: 290,
        margin: "20px auto",
        backgroundColor: "#FFFFFF",
    };
    return (
        <div>
            <Grid>
                <Paper elevation={23} style={paperStyle}>
                    <Grid align="center">
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
                        </div>
                    </Grid>
                </Paper>
            </Grid>
        </div>
    );
}

export default Home;
