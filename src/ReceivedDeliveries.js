import React from 'react'
import { Grid,Paper} from '@material-ui/core'
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';

import IconButton from "@material-ui/core/IconButton";
import HomeIcon from '@material-ui/icons/Home';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

function ReceivedDeliveries({ backButton }) {
    const history = useHistory();
    const classes = useStyles();
    const paperStyle={padding :20,height:'90vh',width:290, margin:"20px auto", backgroundColor:'rgb(225, 225, 250)'}
    return (
        <div>
             
            <Grid>
                <Paper elevation={10} style={paperStyle} >
                    <Grid align='center' >
                        <div className="header">
                            {backButton ? (
                                <IconButton onClick={() => history.replace(backButton)}>
                                <ArrowBackIosIcon className="header__icon" fontSize="large" />
                                </IconButton>
                                
                            ) : (

                                <Link to="/home">
                                <IconButton>
                                <HomeIcon className="header__icon" fontSize="large" />
                                </IconButton>
                                </Link>
                            )}
                        </div>
                        <h1>Received Deliveries</h1>
                        <div className='receivedDeliveries'>
                            <Link to='/delivery'>
                            <ThemeProvider theme={theme}>
                                <Button variant="contained" color="primary" className={classes.margin}>
                                    Commande: XVHA
                                </Button>
                            </ThemeProvider>
                            </Link>
                        </div>
                        
                    </Grid>
                </Paper>
            </Grid>
        </div>
    )
}

export default ReceivedDeliveries
