import React, {useState} from "react";
import { Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
//import {updateDeliveryStatus} from './api.js'
import "./DeliveryStatus.css";


import { Link, useHistory } from "react-router-dom";


    function DeliveryStatus({ backButton }) {


    function colisRecupere (event){
        event.preventDefault()
        console.log('colis  recupere')
        document.getElementById("firstbutton").disabled = true;
        document.getElementById("secondbutton").disabled = false;
        document.getElementById("thirdbutton").disabled = false;
    }

    function colisNonLivre (event){
        event.preventDefault()
        console.log("colis non Livre")
        document.getElementById("secondbutton").disabled = true;
    document.getElementById("thirdbutton").disabled = true;
    
    
    }
    function colisLivre (event){
        event.preventDefault()

            console.log("colis Livre")

        document.getElementById("thirdbutton").disabled = true;
    document.getElementById("secondbutton").disabled = true;
    }
    const btnstyle = { margin: "15px 0", height: "10vh", width: "250px" , backgroundColor:"#1460BD", color:"#FFFFFF", hover:{color:"white"}};
    const history = useHistory();

    return (
        <div className="statusContainer">
            <Grid align="center">
                        <div className="statusHeader">
                            {backButton ? (
                                <IconButton
                                    onClick={() => history.replace(backButton)}
                                >
                                    <ArrowBackIosIcon
                                        className="header__icon"
                                        fontSize="large"
                                    />
                                </IconButton>
                            ) : (
                                <Link to="/home">
                                    <IconButton>
                                        <ArrowBackIosIcon
                                            className="header__icon"
                                            fontSize="large"
                                        />
                                    </IconButton>
                                </Link>
                            )}
                            <Link to="/home">
                                <IconButton>
                                    <HomeIcon
                                        className="header__icon2"
                                        fontSize="large"
                                    />
                                </IconButton>
                            </Link>
                        </div>
                        <div>
                            <p>okay status</p>
                        </div>
                        <div className="statusButton">
                            <div className="homeButton1">
                                
                                    <Button
                                        id="firstbutton"
                                        variant="contained"
                                        size="large"
                                        color="default"
                                        style={btnstyle}
                                        onClick={colisRecupere}
                                      
                                    >
                                        colis recupere
                                    </Button>
                                
                            </div>
                            <div className="homeButton2">
                                    <Button
                                        id="secondbutton"
                                        variant="contained"
                                        size="large"
                                        color="default"
                                        style={btnstyle}
                                        onClick={colisNonLivre}
                                    >
                                        Colis non livre
                                    </Button>
                                     <Button
                                        id="thirdbutton"
                                        variant="contained"
                                        size="large"
                                        color="default"
                                        style={btnstyle}
                                        onClick={colisLivre}
                                    >
                                        Colis livre
                                    </Button>
                            </div>
                        </div>
                    </Grid>
        </div>
    );
}

export default DeliveryStatus;
