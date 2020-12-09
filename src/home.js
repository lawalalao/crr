import React from 'react'
import { Grid,Paper} from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import './home.css'

import Button from '@material-ui/core/Button';
import { Link, useHistory } from "react-router-dom";




function Home() {
    const btnstyle={margin:'15px 0', height: '10vh' , width:'250px'};
    
    const history = useHistory();
    const paperStyle={padding :20,height:'90vh',width:290, margin:"20px auto", backgroundColor:'rgb(225, 225, 250)'}
    return (
        <div>
            <Grid>
                <Paper elevation={10} style={paperStyle} >
                    <Grid align='center' >
                        <div className='homeHeader'>
                                <div className="homeHeader_icon">
                                    <AccountCircleIcon />
                                    
                                </div>
                                <div className="homeHeader_text">
                                    <h4>Koffi A.</h4>
                                </div>
                                    
                                <div className="homeHeader_notificationIcon">
                                    <NotificationsActiveIcon />
                                </div>
                        </div>
                        <div  className="homeButton">
                            <div className="homeButton1">
                                <Link to='/ReceivedDeliveries'>
                                    <Button  variant="outlined" size="large" color="default" style={btnstyle} >
                                    Commandes Recues
                                    </Button>
                                </Link>
                                <Link to='/historique'>
                                <Button variant="outlined" size="large" color="default" style={btnstyle}>
                                    Historique
                                </Button>
                                </Link>
                            </div>
                            <div className="homeButton2">
                               
                                <Link to='/PersonnalInfo'>
                                <Button variant="outlined" size="large" color="default" style={btnstyle}>
                                    Info Personnelles
                                </Button>
                                </Link>
                            </div>
                        </div>
                    </Grid>
                </Paper>
            </Grid>
        </div>
    )
}

export default Home
