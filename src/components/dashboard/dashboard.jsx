import React from 'react';

import ActivityFeed from "../activity/activity"
import Header from "../header/header"

import './dashboard.css';

class ScreenDashboard extends React.Component {
    componentDidMount() {
        // Redirect to login if user is not logged in
        console.log('LOGGG', this.props.loggedIn);
        // if (!this.props.loggedIn) {
        //     this.props.history.replace('/login');
        // }
        const isLoggedIn = localStorage.getItem("token");
        const isVoiceLoggedIn = localStorage.getItem("voice_token");
        if (!isLoggedIn) {
            console.log('FROM / to /login') 
            this.props.history.replace('/login')
        }
        if (isLoggedIn && !isVoiceLoggedIn) {
            console.log('FROM / to /voice_login') 
            this.props.history.replace('/voice_login')
        }
    }

    render() {
        return (
            <>
            <Header />
            <br/>
            <div className="dashboard-screen">
                <ActivityFeed/>
            </div>
            </>
        );
    }
}

export default ScreenDashboard;
