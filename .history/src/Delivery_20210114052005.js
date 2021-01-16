import React, {useState,useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Grid} from "@material-ui/core";
import {deliveryManHistory} from "./api"
import {updateDeliveryStatus} from './api.js'
function ReceivedDeliveries({ backButton }) {

    const [receiver, setReceiver] = useState({})
    const [origin, setOrigin] = useState("")
    const [destination, setDestination] = useState("")
    const [company,setCompany] = useState({})
    const [code,setCode] = useState("")
    const user = sessionStorage.getItem('code')
    
    useEffect(() => {
        deliveryManHistory(user, "STATUS_PROCESSING_PARCEL_DELIVERY_REQUEST").then(data =>{
        console.log(data)
    })
    const interval = setInterval(() => {
            deliveryManHistory(user)
        },10000)
        return() => clearInterval(interval)
    },);
    function colisRecupere (event){
        event.preventDefault()
        updateDeliveryStatus(code,"STATUS_COLLECTING_PARCEL").then(data =>{
            console.log(data)
            console.log("colis recupere")
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
                            <Link to="/home">
                                <IconButton>
                                    <HomeIcon
                                        className="header__icon2"
                                        fontSize="large"
                                    />
                                </IconButton>
                            </Link>
                        </div>
                        <h1>Details commandes</h1>
                        <p>{code}</p>
                        <p>vous avez recu une livraison</p>
                        <p>Origin: {origin} </p>
                        <p>Destination : {destination}</p>
                        <p>company : {company.name}</p>
                        <p>client : {receiver.firstName}</p>
                        <p>Telephone : {receiver.phoneNumber}</p>
                        <p>Whatsapp: {receiver.whatsappNumber}</p>
                        <div>
                           
                                <Button
                                    onClick={colisRecupere}
                                    variant="contained"
                                    size="large"
                                    color="default"
                                    style={btnstyle}
                                >
                                    Demarrez la Course
                                </Button>
                         
                        </div>
                    </Grid>
        </div>
    );
}

export default ReceivedDeliveries;
