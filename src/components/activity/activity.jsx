import React from 'react';
import './activity.css';

class ActivityFeed extends React.Component {
    render() {
        return (
            <div className="activity-feed-container">
                <h3 className="activity-feed-header"> Activity Feed </h3>
                <div className="lds-roller">
                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                </div>
            </div>
        );
    }
}

export default ActivityFeed;