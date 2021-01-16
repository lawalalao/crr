import React from "react";
import { Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
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

    const history = useHistory();

    return (
        <div className="statusContainer">
            <Grid align="center">
                        <div className="statusHeader">

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
                                
                                    <button
                                        id="firstbutton"
                                        className="oki"
                                        onClick={colisRecupere}
                                    >
                                        colis recupere
                                    </button>
                                
                            </div>
                            <div className="homeButton2">
                                    <button
                                        id="firstbutton"
                                      
                                        onClick={colisNonLivre}
                                    >
                                        Colis non livre
                                    </button>
                                     <button
                                        id="thirdbutton"
                                       
                                        onClick={colisLivre}
                                    >
                                        Colis livre
                                    </button>
                            </div>
                        </div>
                    </Grid>
        </div>
    );
}

export default DeliveryStatus;
