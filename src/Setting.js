import React from 'react'
import { Button} from '@material-ui/core'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Link, useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Grid,Paper} from '@material-ui/core'
import './Setting.css'

function Setting({backButton}) {
    const btnstyle={margin:'15px 0', backgroundColor:"rgb(32, 32, 139)",}

    const [value, setValue] = React.useState('moto');
    const [valueDispo, setValueDispo] = React.useState('Disponible');

    const handleChange = (event) => {
    setValue(event.target.value);
    };

    const handleChangeDispo = (event) => {
    setValueDispo(event.target.value);
    };

    function handleSubmit(event) {
        //write button onclick function
        console.log (value);
        console.log(valueDispo);
    }


    const history = useHistory();
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
                                <ArrowBackIosIcon className="header__icon" fontSize="large" />
                                </IconButton>
                                </Link>
                            )}
                            <IconButton className="iconperson">
                                <AccountCircleIcon /> 
                                <p>Koffi.A</p>
                                </IconButton>
                        
                        </div>
                        <h1>Parametres</h1>
                        <div className="setting">
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Moyen de deplacement</FormLabel>
                                    <RadioGroup className="radiogroup1" aria-label="type" name="transport1" value={value} onChange={handleChange}>
                                        <FormControlLabel value="moto" control={<Radio />} label="moto" />
                                        <FormControlLabel value="velo" control={<Radio />} label="velo" />
                                        <FormControlLabel value="trycicle" control={<Radio />} label="trycicle" />
                                        <FormControlLabel value="voiture" control={<Radio />} label="voiture" />

                                    </RadioGroup>
                                </FormControl>
                                <FormControl component="fieldset">
                                    <div className='settingDispo'>
                                        <FormLabel component="legend">Disponibilite</FormLabel>
                                        <RadioGroup className="radiogroup" aria-label="type" name="disponibilite" value={valueDispo} onChange={handleChangeDispo}>
                                            <FormControlLabel value="Disponible" control={<Radio />} label="Disponible" />
                                            <FormControlLabel value="Non Disponible" control={<Radio />} label="Non Disponible" />
                                        </RadioGroup>
                                    </div>
                                </FormControl>
                                <Button onClick={handleSubmit} type='submit' color='primary' variant="contained" style={btnstyle} fullWidth >Validez</Button>
                        </div>
                        </Grid>   
                    </Paper>
                </Grid> 
            

        </div>
    )
}

export default Setting
