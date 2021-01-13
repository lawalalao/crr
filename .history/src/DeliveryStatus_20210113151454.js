import React from "react";
import { Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import "./DeliveryStatus.css";


import { Link, useHistory } from "react-router-dom";

function DeliveryStatus({ backButton }) {
    
    const btnstyle = { margin: "15px 0", height: "10vh", width: "250px" , backgroundColor:"#1460BD", color:"#FFFFFF", boxShadow:" 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"};
 
    
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
                        <div className="homeButton">
                            <div className="homeButton1">
                              
                                    <Button
                                        variant="contained"
                                        size="large"
                                        color="default"
                                        style={btnstyle}
                                    >
                                        demarrer
                                    </Button>
                              
                                
                                    <Button
                                        variant="contained"
                                        size="large"
                                        color="default"
                                        style={btnstyle}
                                    >
                                        colis recupere
                                    </Button>
                                
                            </div>
                            <div className="homeButton2">
                                
                                    <Button
                                        variant="contained"
                                        size="large"
                                        color="default"
                                        style={btnstyle}
                                    >
                                        en cours de livraisons
                                    </Button>
                              
                            </div>
                        </div>
                    </Grid>
        </div>
    );
}

export default DeliveryStatus;
