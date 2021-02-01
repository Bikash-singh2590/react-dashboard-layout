
import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import "../login/login.css";
import google from '../../assets/images/google.png';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';




const MyLoginPage = () => {
    let history = useHistory();
    // hooks state
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    // onchange function for email and password
    const onChangeHandler = (event) => {
        event.preventDefault();
        if (event.target.name === "email") {
            setEmail(event.target.value)
        }
        else {
            setPassword(event.target.value)
        }
    }

    // onSubmit function  
    const submitHandler = () => {
        history.push('/Dashboard')
    }

    // route function for registation page
    const toRegistationPage = () => {
        history.push('/Registration')
    }
    
    return (
        <div id="Login-section">
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                        <div>
                            <center>
                                <h1 className="login_head">
                                    Login to <span>Google</span>
                                </h1>
                            </center>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <div className="login-form-section">
                            <div >
                                <img className="loginLogo" src={google} alt="google_logo" />
                            </div>
                            <div className="login-form-title">
                                <center>Login here!</center>
                            </div>
                            <div className="login-form-body">
                                <ValidatorForm
                                    onSubmit={submitHandler}
                                    onError={errors => console.log(errors)}
                                >
                                    <TextValidator
                                        margin="dense"
                                        fullWidth={true}
                                        label="Login Id"
                                        name="email"
                                        value={email}
                                        variant="outlined"
                                        size="small"
                                        validators={['required']}
                                        errorMessages={['Please enter the login id.']}
                                        onChange={onChangeHandler}

                                    />
                                    <TextValidator
                                        margin="dense"
                                        fullWidth={true}
                                        label="Password"
                                        name="password"
                                        variant="outlined"
                                        size="small"
                                        type="password"
                                        value={password}
                                        validators={['required']}
                                        errorMessages={['Please enter the password.']}
                                        onChange={onChangeHandler}
                                    />
                                    <div className="forgot-password">
                                        Forgot Password?
                        </div>
                                    <Button
                                        type="submit"
                                        margin="dense"
                                        variant="contained"
                                        fullWidth={true}
                                        color="primary"
                                    >
                                        Login
                                    </Button>
                                    <p className="RegisterLink" >Don't have an account yet? <span className="RegisterLinkSpan" onClick={toRegistationPage}>Register</span></p>
                                </ValidatorForm>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                    </Grid>
                </Grid>
            </Container>

        </div>
    );
};

export default MyLoginPage;
