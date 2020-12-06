import React from 'react'
import { Grid,Paper} from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import './home.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from "react-router-dom";
import ReceivedDeliveries from './ReceivedDeliveries';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function Home() {
    const classes = useStyles();
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
                                    <Button  variant="outlined" size="large" color="primary" className={classes.margin} >
                                        Commandes Recues
                                    </Button>
                                </Link>
                                <Button variant="outlined" size="large" color="primary" className={classes.margin}>
                                    Courses
                                </Button>
                            </div>
                            <div className="homeButton2">
                                <Button variant="outlined" size="large" color="primary" className={classes.margin}>
                                    Parametres
                                </Button>
                                <Button variant="outlined" size="large" color="primary" className={classes.margin}>
                                    Info Personnelles
                                </Button>
                            </div>
                        </div>
                    </Grid>
                </Paper>
            </Grid>
        </div>
    )
}

export default Home
