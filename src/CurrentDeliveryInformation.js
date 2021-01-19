import React, {useState,useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./DeliveryInformation.css"
import { Grid} from "@material-ui/core";
import {deliveryInformation} from "./api"
import {updateDeliveryStatus} from './api.js'
import { deliveryStatusStateMachine, deliveryStatusConstants } from './constants'


function CurrentDeliveryInformation({match, backButton, ...props}) {
    const {deliveryCode: deliveryCode} = match.params
    const [receiver, setReceiver] = useState({})
    const [origin, setOrigin] = useState("")
    const [destination, setDestination] = useState("")
    const [company, setCompany] = useState({})
    const [code, setCode] = useState("")
    const [status, setStatus] = useState("")
    const [statusToString, setStatusToString] = useState("")
    
    useEffect(() => {
        deliveryInformation(deliveryCode).then(data =>{
            console.log(data, 'datadatadatadatadata')
            setCode(data.code)
            setCompany(data.company)
            setOrigin(data.origin)
            setDestination(data.destination)
            setReceiver(data.receiver)
            setStatus(data.status)
            setStatusToString(data.statusToString)
    })
    },[deliveryCode]);

    const handleDeliveryStatusUpdate = (status) => {
        updateDeliveryStatus(code, status).then(data => {
            setStatus(data.status)
            setStatusToString(data.statusToString)
        })
    }

    const history = useHistory();
    const btnStyle = { margin: "15px 0", height: "8vh", width: "250px" };


    const renderDeliveryStatusButtons = (currentDeliveryStatus) => {
        console.log(currentDeliveryStatus, 'currentDeliveryStatuscurrentDeliveryStatuscurrentDeliveryStatus')
        const currentStateMachineStatus = deliveryStatusStateMachine[currentDeliveryStatus]

        return currentStateMachineStatus.nextStates.map((state) => {
            return <StatusBtn key={state.value} status={state.value} label={state.btnValue} />
        })
    }

    const StatusBtn = ({status, label}) => {
        return (
            <Button
                onClick={() => handleDeliveryStatusUpdate(status)}
                variant="contained"
                size="large"
                color="default"
                style={btnStyle}
            >
                {label}
            </Button>
        )
    }

    return (
        <div className="homeContainer1">
                    <Grid align="center">
                        <div className="header">
                                <IconButton
                                    onClick={() => history.replace(backButton)}
                                >
                                    <ArrowBackIosIcon
                                        className="header__icon"
                                        fontSize="large"
                                    />
                                </IconButton>
                        </div>
                        
                        {code ? <h1>Details commandes N : {code} </h1> : ""}
                    
                    
                        {origin ? <p>Origin: {origin} </p> : ""}
                        {destination ? <p>Destination : {destination}</p> :""}
                        {statusToString ? <p>status: : {statusToString}</p> :""}
                        {company.name ? <p>company : {company.name}</p> : ""}
                        {receiver.firstName ? <p>client : {receiver.firstName} </p> : ""}
                        {receiver.phoneNumber ? <p>Telephone : {receiver.phoneNumber}</p> : ""}
                        {receiver.whatsappNumber ? <p>Whatsapp: {receiver.whatsappNumber}</p> : ""}
                        <div>
                            {(status === deliveryStatusConstants.STATUS_PARCEL_DELIVERED) ?
                                "Bravo vous venez de complétez une livraison" : (status && renderDeliveryStatusButtons(status))}
                        </div>
                    </Grid>
        </div>
    );
}

export default CurrentDeliveryInformation;
