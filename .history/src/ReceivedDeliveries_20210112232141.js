import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Grid} from "@material-ui/core";
import {deliveryManHistory} from "./api"
function ReceivedDeliveries({ backButton }) {
    const [receiver, setReceiver] = useState({})
    const user = sessionStorage.getItem('user')
    deliveryManHistory(user).then(data =>{
        console.log(data["hydra:member"][0])
        sessionStorage.setItem("origin", data["hydra:member"][0].origin )
        sessionStorage.setItem("Destination", data["hydra:member"][0].destination )
        sessionStorage.setItem("company", data["hydra:member"][0].company.name )
        sessionStorage.setItem('receiver')
    })

    const origin = sessionStorage.getItem("origin")
    const Destination = sessionStorage.getItem("Destination")
    const company = sessionStorage.getItem("company")
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
                        <p>Destination : {Destination}</p>
                        <p>company : {company}</p>
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
