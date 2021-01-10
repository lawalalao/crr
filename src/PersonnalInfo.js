import React from "react";

import { Link, useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Grid } from "@material-ui/core";
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

    return (
        <div className="container">
            
                    <Grid>
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
                          
                                <IconButton className="iconperson">
                                    <AccountCircleIcon />
                                    <p>{Nom}</p>
                                </IconButton>
                           
                        </div>
                        <div>
                            
                            <h1 className="title">
                                Informations personnelles
                            </h1>
                            <div className="personnalInfo">
                                <div className="c1">
                                    <h3> Nom: </h3>
                                    <h3>{Nom}</h3>
                                    
                                </div>
                                <div className="c1">
                                    <h3> Prenom: </h3>
                                    <h3>{Prenom}</h3>
                                    
                                </div>
                                <div className="c1">
                                    <h3> Sexe: </h3> 
                                    <h3> {Sexe}</h3>
                                </div>
                                <div className="c1">
                                    <h3>Numero :</h3>
                                    <h3>{Numero}</h3>
                                </div>
                                <div className="c1">
                                    <h3>Naiss:</h3>
                                    <h3> {DateNaiss}</h3>
                                </div>
                               
                            </div>
                        </div>
                    </Grid>
           
        </div>
    );
}

export default PersonnalInfo;
