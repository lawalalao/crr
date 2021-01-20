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
                            {code ? <h1>Commandes N : {code} </h1> : ""}
                        
                            <div className="infoParagraph">
                                <div className="table-wrap">
                                    <div className="table-responsive-wrap">
                                    <div className="tableHistory">
                                        <table className="table">
                                            <thead>
                                                 {code ? 
                                                    <tr>
                                                        {code}
                                                    </tr> : ""
                                                }
                                                <tr>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {origin ? 
                                                    <tr>
                                                        <td>Origin</td>
                                                        <td>{origin}</td>
                                                    </tr> : ""
                                                }
                                                {destination ?
                                                    <tr>
                                                        <td>Destination</td>
                                                        <td>{destination}</td>
                                                    </tr> : ""
                                                }
                                                {statusToString ?
                                                    <tr>
                                                        <td>Status</td>
                                                        <td>{statusToString}</td>
                                                    </tr> : ""        
                                                }
                                                {company.name ?
                                                    <tr>
                                                        <td>Entreprise</td>
                                                        <td>{company.name}</td>
                                                    </tr> : "" 
                                                }
                                                {receiver.firstName ?
                                                    <tr>
                                                        <td>Client</td>
                                                        <td>{receiver.firstName}</td>
                                                    </tr> : ""  
                                                }  
                                                {receiver.phoneNumber ?
                                                    <tr>
                                                        <td>Telephone</td>
                                                        <td>{receiver.phoneNumber}</td>
                                                    </tr> : ""  
                                                }  
                                                {receiver.whatsappNumber ?
                                                    <tr>
                                                        <td>Whatsapp</td>
                                                        <td>{receiver.whatsappNumber}</td>
                                                    </tr> : ""  
                                                } 
                                            </tbody>
                                        </table>
                                    </div>
                                    </div>
                                </div>
                            </div>
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
