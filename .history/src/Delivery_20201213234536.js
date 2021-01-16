import React from "react";
import { Grid, Paper } from "@material-ui/core";
import "./ReceivedDeliveries.css";
import Button from "@material-ui/core/Button";

import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";

function Delivery({ backButton }) {
    const btnstyle = { margin: "15px 0", height: "8vh", width: "250px" };
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
                                <Link to="/home">
                                    <IconButton>
                                        <HomeIcon
                                            className="header__icon"
                                            fontSize="large"
                                        />
                                    </IconButton>
                                </Link>
                            )}
                        </div>
                        <h1>Received Deliveries</h1>
                        <div className="receivedDeliveries">
                            <Link to="/delivery">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    style={btnstyle}
                                >
                                    Commande: XVHA
                                </Button>
                            </Link>
                        </div>
                    </Grid>
                </Paper>
            </Grid>
        </div>
    );
}

export default Delivery;
