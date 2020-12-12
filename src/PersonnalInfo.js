import React from "react";

import { Link, useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Grid, Paper } from "@material-ui/core";
import "./Personnalnfo.css";

function PersonnalInfo({ backButton }) {
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
                                        <ArrowBackIosIcon
                                            className="header__icon"
                                            fontSize="large"
                                        />
                                    </IconButton>
                                </Link>
                            )}
                            <Link to="/home">
                                <IconButton className="iconperson">
                                    <AccountCircleIcon />
                                    <p>Koffi.A</p>
                                </IconButton>
                            </Link>
                        </div>
                        <h1>Informations personnelles</h1>
                        <div className="personnalInfo">
                            <h3>Nom:</h3>
                            <h3>Prenom:</h3>
                            <h3>Sexe:</h3>
                            <h3>Numero:</h3>
                            <h3>Date de Naissance:</h3>
                        </div>
                    </Grid>
                </Paper>
            </Grid>
        </div>
    );
}

export default PersonnalInfo;
