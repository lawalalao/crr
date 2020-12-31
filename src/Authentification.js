import React, { useState } from "react";
import {
    Grid,
    Paper,
    Avatar,
    TextField,
    Button
} from "@material-ui/core";
import ok from './image/4.png'
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import "./Authentification.css";
import { useHistory } from "react-router-dom";
import {authenticate} from "./api";

const Authentification = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [formError, setFormError] = useState("");
    const history = useHistory();
 
    
    function handleSubmit(event) {

        event.preventDefault();

  authenticate(username, password).then(data => {
            const Token = data.token
            if (Token) {
                localStorage.setItem('token', data.token)
                localStorage.setItem('user' , data.id)
                sessionStorage.setItem('token', data.token)
                sessionStorage.setItem('user', data.id)
                history.push('/home')
            } else {
                
                setFormError(data.message)
            }
            
        })
      
    
        
    }
  
    const paperStyle = {
        padding:20,
        height: "90vh",
        width: 290,
        backgroundColor: "white",
        margin: "20px auto",
        color:"#1460BD"
    };
    
    const imgstyle = {width:"100%", height:"35vh"}
    const avatarStyle = { backgroundColor: "#1460BD", marginTop: "5px", top: "10%", left: "40%" };
    const btnstyle = { margin: "15px 0", marginTop: "20px" ,backgroundColor:"#1460BD" , borderRadius: "12px",  boxShadow: "0 9px #FFFFFF", height:"7vh", fontSize:"20px"};
    const txtstyle = {
        marginTop: "25px",
        color:"white"
    };
    

    return (
        <Grid>
            <Paper elevation={24} style={paperStyle}>
                <Grid align="center">
                    
                        <div className="container">
                            <div className="ok">
                            <img src={ok} alt="Snow" style={imgstyle}/>
                            </div>
                                    <Avatar style={avatarStyle}>
                                        <LockOutlinedIcon />
                                    </Avatar>
                                    <h3 className="loginSubtitle">
                                        Connexion
                                    </h3>
                               
                        </div>
                        
                </Grid>
                
                <div className="loginForm">
                    <TextField
                        label="Utilisateur"
                        variant="filled"
                        placeholder="Entrez votre numero de telephone"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        fullWidth
                        required
                        
                    />
                    <TextField
                        label="Mot de passe"
                        variant="filled"
                        placeholder="Entrez votre mot de passe"
                        value={password}
                        style={txtstyle}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        fullWidth
                        required
                    />
                </div>
                <div className="loginButton">
                <Button
                    onClick={handleSubmit}
                    type="submit"
                    color="primary"
                    variant="contained"
                    style={btnstyle}
                    fullWidth
                >
                
                    Se connecter
                </Button>
                </div>
                <div className="loginError">
                    {(formError !== "") ?  alert("identifiants incorrects") :""}
                </div>
            </Paper>
        </Grid>
    );
    
};
export default Authentification;

