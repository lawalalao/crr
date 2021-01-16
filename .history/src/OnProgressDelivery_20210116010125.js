import React,{useState,useEffect}  from 'react'
import { Grid} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import deliveryManOnProgressDeliveries from './api'
import "./OnProgressDelivery.css"
function OnProgressDelivery({ backButton }) {
    const history = useHistory();
    const [company, setCompany] = useState({})
    const [code, setCode] = useState("")
    let status = ["STATUS_COLLECTING_PARCEL","STATUS_PARCEL_IN_DELIVERY","STATUS_PARCEL_NOT_DELIVERED_RECIPIENT_ABSENT", "STATUS_PARCEL_NOT_DELIVERED_OTHER_REASON" ]
    useEffect(() => {
        deliveryManOnProgressDeliveries("STATUS_PROCESSING_PARCEL_DELIVERY_REQUEST").then(data =>{
            
        
        })
        const interval = setInterval(() => {
            deliveryManOnProgressDeliveries("STATUS_PROCESSING_PARCEL_DELIVERY_REQUEST")
        },10000)
        return() => clearInterval(interval)
    },[]);
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
                        <div className="table-wrap">
                            <div className="table-responsive-wrap">
                                <div className="tableHistory">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <td>code</td>
                                            <td>companies</td>
                                            <td>status</td>
                                        </tr>
                                    </thead>
                                </table>
                                </div>
                            </div>
                        </div>
            </Grid>
        </div>
    )
}

export default OnProgressDelivery
