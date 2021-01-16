import React from 'react'
import { Grid} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./OnProgressDelivery.css"
function OnProgressDelivery({ backButton }) {
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
                           
                        </div>
                <p>commandes en cours</p>
            </Grid>
        </div>
    )
}

export default OnProgressDelivery
