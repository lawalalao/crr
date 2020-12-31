import React from "react";
import { Link, useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Grid, Paper } from "@material-ui/core";

function ReceivedDeliveries({ backButton }) {
    const history = useHistory();
    const btnstyle = { margin: "15px 0", height: "8vh", width: "250px" };
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
                        <h1>Details commandes</h1>
                        <div>
                            <Link to="/DeliveryStatus">
                                <Button
                                    variant="contained"
                                    size="large"
                                    color="default"
                                    style={btnstyle}
                                >
                                    Demarrez la Course
                                </Button>
                            </Link>
                        </div>
                    </Grid>
                </Paper>
            </Grid>
        </div>
    );
}

export default ReceivedDeliveries;
