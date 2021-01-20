import React, {useEffect, useState} from "react";
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
    const [name, setName] = useState("")
    const [prenoms, setPrenoms] = useState("")
    const [sex, setSex] = useState("")
    const [numero, setNumero] = useState("")
    const [dateDeNaissance, setDateDeNaissance] = useState("")

    useEffect(() => {
        deliveryManInfo(user).then(data =>{
            setName(data.lastName)
            setPrenoms(data.firstName)
            setSex(data.gender)
            setNumero(data.phoneNumber)
            setDateDeNaissance(data.birthDate)
        })
    }, [])

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
                                    <AccountCircleIcon className="circleIcon"/>
                                    <p>{prenoms}</p>
                                </IconButton>
                           
                        </div>
                        <div>
                            
                            <h1 className="title">
                                Informations personnelles
                            </h1>
                            <div className="personnalInfo">
                                <div className="info">
                                    <h3> Nom: </h3>
                                    <h3>{name}</h3>
                                    
                                </div>
                                <div className="info">
                                    <h3> Prenom: </h3>
                                    <h3>{prenoms}</h3>
                                    
                                </div>
                                <div className="info">
                                    <h3> Sexe: </h3> 
                                    <h3> {sex}</h3>
                                </div>
                                <div className="info">
                                    <h3>Numero :</h3>
                                    <h3>{numero}</h3>
                                </div>
                                <div className="info">
                                    <h3>Naissance:</h3>
                                    <h3> {moment(dateDeNaissance).format('DD-MM-YYYY')}</h3>
                                </div>
                               
                            </div>
                        </div>
                    </Grid>
           
        </div>
    );
}

export default PersonnalInfo;
