import React, { useState } from "react";
import {
    Grid,
    Avatar,
    TextField,
    Button
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import ok from "./image/chapchap-logo-vert-light.png";
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

    const imgstyle ={width:"60%", height:"35vh", marginLeft:"60px"}
    const avatarStyle = { backgroundColor: "#1460BD", marginTop: "-20px", left: "40%" };
    const btnstyle = { margin: "15px 0", marginTop: "20px" ,backgroundColor:"#1460BD" , borderRadius: "12px", height:"7vh", fontSize:"20px"};
    const txtstyle = {
        marginTop: "25px",
        color:"white",
        backgroundColor:"white",
        opacity:0.8,
        borderRadius: "18px"
    };
    

    return (
          <div className="authContainer">
                <Grid>
                    <div style={imgstyle}>
                        <img src={ok} alt="ok"/>
                    </div>
                    <Avatar style={avatarStyle}>
                                        <LockOutlinedIcon />
                                    </Avatar>
                                    <h3 className="loginSubtitle">
                                        Connexion
                                    </h3>
                               
                
                        
               
                
                <div className="loginForm">
                    <TextField
                        label="Utilisateur"
                        variant="outlined"
                        placeholder="Entrez votre numero de telephone"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={txtstyle}
                        fullWidth
                        required
                        
                    />
                    <TextField
                        label="Mot de passe"
                        variant="outlined"
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
                    {(formError !== "") ?  "identifiants incorrects":""}
                </div>
           
        </Grid>
        </div>
    );
    
};
export default Authentification;

