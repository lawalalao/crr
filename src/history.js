import React from "react";
import { Link, useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Grid, Paper } from "@material-ui/core";
import {deliveryManHistory} from "./api";
function History({ backButton }) {
    const user = sessionStorage.getItem('user')
    console.log(user)

    deliveryManHistory(user).then(data =>{
        console.log(data)
        console.log(data["hydra:member"])

    })
   

    
    const history = useHistory();

    const paperStyle = {
        padding: 20,
        height: "90vh",
        width: 290,
        margin: "20px auto",
        backgroundColor: "rgb(225, 225, 250)",
    };
    return (
        <div>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align="center">
                        <div className="header">
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
                                <Link to="/ReceivedDeliveries">
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
                                        className="header__icon"
                                        fontSize="large"
                                    />
                                </IconButton>
                            </Link>
                        </div>
                        <h1>Historique de votre livraison</h1>
                       
                    </Grid>
                </Paper>
            </Grid>
        </div>
    );
}

export default History;
