import React, {useState,useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./DeliveryInformation.css"
import { Grid} from "@material-ui/core";
import {deliveryInformation} from "./api"
import {updateDeliveryStatus} from './api.js'
import {deliveryStatusConstants } from './constants'

function DeliveryInformation({ backButton }) {

    const [receiver, setReceiver] = useState({})
    const [origin, setOrigin] = useState("")
    const [destination, setDestination] = useState("")
    const [company, setCompany] = useState({})
    const [code, setCode] = useState("")
    const [status, setStatus] = useState("")
    const [statusToString, setStatusToString] = useState("")
    const deliveryCode = sessionStorage.getItem('code')
    
    useEffect(() => {
        deliveryInformation(deliveryCode).then(data => {
            setCode(data.code)
            setCompany(data.company)
            setOrigin(data.origin)
            setDestination(data.destination)
            setStatus(data.status)
            setReceiver(data.receiver)
            setStatusToString(data.statusToString)
    })
    },[deliveryCode]);

    const handleDeliveryStatusUpdate = () => {
        updateDeliveryStatus(code, deliveryStatusConstants.STATUS_COLLECTING_PARCEL).then(data =>{
            history.push('/CurrentDeliveryInformation/' + data.code)
        })
    }

    const history = useHistory();
    const btnstyle = { margin: "15px 0", height: "8vh", width: "250px" };
    

    return (
        <div className="homeContainer1">
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
                        </div>
                        <div className="info">
                        {code ? <h1>Details commandes N : {code} </h1> : ""}
                    
                    
                        {origin ? <p>Origin: {origin} </p> : ""}
                        {destination ? <p>Destination : {destination}</p> :""}
                        {statusToString ? <p>Status : {statusToString}</p> : ""}
                        {company.name ? <p>company : {company.name}</p> : ""}
                        {receiver.firstName ? <p>client : {receiver.firstName} </p> : ""}
                        {receiver.phoneNumber ? <p>Telephone : {receiver.phoneNumber}</p> : ""}
                        {receiver.whatsappNumber ? <p>Whatsapp: {receiver.whatsappNumber}</p> : ""}
                        </div>
                        <div>
                                <Button
                                    onClick={handleDeliveryStatusUpdate}
                                    variant="contained"
                                    size="large"
                                    color="default"
                                    style={btnstyle}
                                >
                                  Demarrer la course
                                </Button>
                        </div>
                    </Grid>
        </div>
    );
}

export default DeliveryInformation;
