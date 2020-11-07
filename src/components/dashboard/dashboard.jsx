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
        if (!isLoggedIn) {
            this.props.history.replace('/login');
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
