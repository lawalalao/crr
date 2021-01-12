import React from "react";
import moment from 'moment';
import { Link, useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Grid } from "@material-ui/core";
import "./Personnalnfo.css";
import {deliveryManInfo} from "./api";

function PersonnalInfo({ backButton }) {
    const user = sessionStorage.getItem('user')
  
    deliveryManInfo(user).then(data =>{
    
        localStorage.setItem('name', data.firstName)
        localStorage.setItem('Prenom', data.lastName)
        localStorage.setItem('Sex', data.gender)
        localStorage.setItem('Numero', data.phoneNumber)
        localStorage.setItem('DateNaiss', data.birthDate)
       
    })      
    const Nom = localStorage.getItem('name') 
    const Prenom = localStorage.getItem('Prenom') 
    const Sexe = localStorage.getItem('Sex') 
    const Numero = localStorage.getItem('Numero') 
    const DateNaiss = localStorage.getItem('DateNaiss') 
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
                                    <h3>Naissance:</h3>
                                    <h3> {moment(DateNaiss).format('DD-MM-YYYY')}</h3>
                                </div>
                               
                            </div>
                        </div>
                    </Grid>
           
        </div>
    );
}

export default PersonnalInfo;
