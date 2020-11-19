import React from "react";
import { Link } from 'react-router-dom';
import LoginButton from '../login_button/LoginButton'

import './loginScreen.css';

class LoginScreen extends React.Component {

    componentDidMount() {
        // Redirect to login if user is logged in
        const isLoggedIn = localStorage.getItem("token");
        const isVoiceLoggedIn = localStorage.getItem("voice_token");
        if (isLoggedIn && isVoiceLoggedIn) {
           console.log('FROM loginScreen to /') 
            // this.props.signIn();
            this.props.history.replace('/');
        } else {
            if (isLoggedIn && !isVoiceLoggedIn) {
                console.log('FROM loginScreen to /voice_login') 
                this.props.history.replace('/voice_login')
            }
        }
    }

    render() {
        return (
            <div className="login-screen">
                <div className="login-image-container">
                </div>

                <div className="login-buttons-container">
                    <h1 className="login-buttons-header"> Log into ITFest App </h1>
                    <p className="login-buttons-description"> Login with Google below: </p>
                    <LoginButton togLog={this.props.togLog} history={this.props.history}/>

                </div>
            </div>
        );
    }
}

export default LoginScreen