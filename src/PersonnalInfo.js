import React from "react";

import { Link, useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Grid, Paper } from "@material-ui/core";
import "./Personnalnfo.css";
import {deliveryManInfo} from "./api";

function PersonnalInfo({ backButton }) {
    const lawal = sessionStorage.getItem('user')
  
    deliveryManInfo(lawal).then(data =>{
    
        sessionStorage.setItem('name', data.firstName)
        sessionStorage.setItem('Prenom', data.lastName)
        sessionStorage.setItem('Sex', data.gender)
        sessionStorage.setItem('Numero', data.phoneNumber)
        sessionStorage.setItem('DateNaiss', data.birthDate)
       
    })      
    const Nom = sessionStorage.getItem('name') 
    const Prenom = sessionStorage.getItem('Prenom') 
    const Sexe = sessionStorage.getItem('Sex') 
    const Numero = sessionStorage.getItem('Numero') 
    const DateNaiss = sessionStorage.getItem('DateNaiss') 
    const history = useHistory();
    const paperStyle = {
        padding: 15,
        height: "90vh",
        width: 290,
        margin: "20px auto",
        backgroundColor: "white",
    };
    return (
        <div>
            <Grid>
                <Paper elevation={24} style={paperStyle}>
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
                                    <p>{Nom}</p>
                                </IconButton>
                            </Link>
                        </div>
                        <h1>Informations personnelles</h1>
                        <div className="personnalInfo">
                            <h3>Nom: {Nom}</h3>
                            <h3>Prenom: {Prenom}</h3>
                            <h3>Sexe: {Sexe}</h3>
                            <h3>Numero: {Numero}</h3>
                            <h3>Date de Naissance: {DateNaiss}</h3>
                        </div>
                    </Grid>
                </Paper>
            </Grid>
        </div>
    );
}

export default PersonnalInfo;
