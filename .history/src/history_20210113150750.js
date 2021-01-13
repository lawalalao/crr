import React , { useState,useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Grid } from "@material-ui/core";
import {deliveryManHistory} from "./api";
import "./history.css";



function History({ backButton }) {
    const [deliveries, setDeliveries] = useState([])

    const user = sessionStorage.getItem('user')
    useEffect(() => {
        deliveryManHistory(user).then(data =>{
        setDeliveries(data["hydra:member"])
        })
        const interval = setInterval(() => {
            deliveryManHistory(user)
        },10000)
        return() => clearInterval(interval)
    },[]);

    const history = useHistory();
    return (
        <div className="historyContainer">
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
                                    <tbody>
                                    {deliveries.map(delivery =>(
                                        <tr key={delivery.id}>
                                            <td>{delivery.code}</td>
                                            <td>{delivery.company.name}</td>
                                            <td>{delivery.statusToString}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                                </div>
                            </div>
                            <div className="row-per-pae-wrap">
                                <p>Rows per page :</p>
                                <button>
                                    <i className="fa fa-angle-left" />
                                </button>
                                <label htmlFor="">
                                    <select>
                                        <option value="">7</option>
                                        <option value="">14</option>
                                        <option value="">25</option>
                                        <option value="">50</option>
                                    </select>
                                </label>
                                <button>
                                    <i className="fa fa-angle-right" />
                                </button>
                                <span>1-7 of 10</span>
                            </div>
                        </div>
                    </Grid>
        </div>
    );
}

export default History;
