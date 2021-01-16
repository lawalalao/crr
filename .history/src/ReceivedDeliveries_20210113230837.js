import React, {useState,useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Grid} from "@material-ui/core";
import {deliveryManHistory} from "./api"
function ReceivedDeliveries({ backButton }) {
    const [receiver, setReceiver] = useState({})
    const [origin, setOrigin] = useState("")
    const [destination, setDestination] = useState("")
    const [company,setCompany] = useState({})
    const [code,setCode] = useState("")
    const user = sessionStorage.getItem('user')
    useEffect(() => {
    deliveryManHistory(user).then(data =>{
        setOrigin(data["hydra:member"][0].origin)
        setDestination(data["hydra:member"][0].destination)
        setCompany(data["hydra:member"][0].company) 
        setReceiver(data["hydra:member"][0].receiver)
        setCode(data["hydra:member"][0].code)
    })
    const interval = setInterval(() => {
            deliveryManHistory(user)
        },10000)
        return() => clearInterval(interval)
    },);
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
                                        className="header__icon2"
                                        fontSize="large"
                                    />
                                </IconButton>
                            </Link>
                        </div>
                        <h1>Details commandes</h1>
                        <p>vous avez recu une livraison</p>
                        <p>Origin: {origin} </p>
                        <p>Destination : {destination}</p>
                        <p>company : {company.name}</p>
                        <p>client : {receiver.firstName}</p>
                        <p>Telephone : {receiver.phoneNumber}</p>
                        <p>Whatsapp: {receiver.whatsappNumber}</p>
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
        </div>
    );
}

export default ReceivedDeliveries;
