import React from 'react';
import  "./Header.css";
import { Grid,Paper} from '@material-ui/core'

import ForumIcon from '@material-ui/icons/Forum';
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from '@material-ui/icons/Home';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";


const Header = ({ backButton }) => {
    const history = useHistory();
    return(

        <div className="header">
                            {backButton ? (
                                <IconButton onClick={() => history.replace(backButton)}>
                                <ArrowBackIosIcon className="header__icon" fontSize="large" />
                                </IconButton>
                                
                            ) : (

                                <Link to="/ReceivedDeliveries">
                                <IconButton>
                                <ArrowBackIosIcon className="header__icon" fontSize="large" />
                                </IconButton>
                                </Link>
                            )}
                            <Link to="/home">
                                <IconButton>
                                    <HomeIcon  className="header__icon" fontSize="large" />
                                </IconButton>
                            </Link>
        
                        </div>
    );

}
 

export default Header;