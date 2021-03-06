import React from 'react';
import ActivityIndexItem from './activity_index_item';
import { Link } from 'react-router-dom';

class ActivityIndex extends React.Component {

    componentDidMount() {

        this.props.fetchActivities();
        this.props.fetchRoutes();
    }

    render() {

        let activities = Object.values(this.props.activities).reverse().map(activity => {
            return (
                <ActivityIndexItem
                    key={activity.id}
                    activity={activity}
                    updateActivity={this.props.updateActivity}
                    deleteActivity={this.props.deleteActivity}
                    fetchRoute={this.props.fetchRoute}
                />
            );
        });

        let actCount = Object.keys(this.props.activities).length;
        let actCountDisp;
        actCount === 1 ? actCountDisp = `1 Activity` : actCountDisp = `${actCount} Activities`


        let routeCount = Object.keys(this.props.routes).length;
        if (routeCount === 0) {
            return (
                <div className="empty-index-container container">
                    <h1>You don't have any routes. Create routes to record activities.</h1>
                    <button id='create-route-btn'><Link to={'routes/new'}>Create New Route</Link></button>
                </div>
            )
        }
        return (
            <div className="wrap scroll">
                <div className="activity-index-container">
                    <div className='activity-index-bar'>
                        <h1 className="activity-heading">My Activities</h1>
                        <h2 className="activity-counting">{actCountDisp}</h2>
                        <button id="create-activity-btn"><Link to={'activities/new'}>Record a new activity</Link></button>
                    </div>
                    <div className="activities-table-container">
                        <table className="activities-table">
                            <thead className="activity-table-head">
                                <tr>
                                    <th className="act-col col-sport">Sport</th>
                                    <th className="act-col col-date">Date</th>
                                    <th className="act-col col-title">Title</th>
                                    <th className="act-col col-time">Time</th>
                                    <th className="act-col col-distance">Distance</th>
                                    <th className="act-col col-elevation">Elevation</th>
                                    <th className="act-col col-actions">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="actvity-index-list">
                                {activities}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );

    }
}

export default ActivityIndex;