
import React , {useState} from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './Authentification.css'


const Authentification=()=>{
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        
    }

    const paperStyle={padding :20,height:'90vh',width:290, margin:"20px auto", backgroundColor:'rgb(225, 225, 250)'}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'15px 0'}
    const passwordFrgetStyle={display:'Flex', flexDirection:'row', color:"red", fontSize:'10px', marginTop:'25px'}
    const passwordAdmincontact = { marginTop:"10px", marginLeft:"15px"}
    
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle} >
                <Grid align='center' >
                    <h1 className="loginTitle">Chapchap Livreur</h1>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h3 className="loginSubtitle">Veuillez vous connecter pour acceder a votre compte svp</h3>
                </Grid>
                <div className="loginForm">
                    <TextField label='Utilisateur' placeholder='Entrez votre nom dutilisateur'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} 
                    fullWidth required
                    />
                    <TextField label='Mot de passe' placeholder='Entrez votre mot de passe'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    type='password' 
                    fullWidth required
                    />
                </div>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="se souvenir de moi"
                />
                <Button onClick={handleSubmit} type='submit' color='primary' variant="contained" style={btnstyle} fullWidth >Se connecter</Button>
                <Typography style={passwordFrgetStyle} >
                    <p>Mot de passe oublie?={'>'}</p>
                    <Link href="#" style={passwordAdmincontact} >
                        contacter l'administrateur
                    </Link>
                </Typography>
                
            </Paper>
        </Grid>
    )
}

export default Authentification