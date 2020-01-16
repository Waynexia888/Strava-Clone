import { connect } from 'react-redux';
import { fetchActivities, deleteActivity, updateActivity } from '../../actions/activity_action';

import ActivityIndex from './activity_index';

const msp = state => {
    let activities = state.entities.activities;
    let routes = state.entities.routes;
    return {
        activities,
        routes
    };
};

const mdp = dispatch => {
    return {
        fetchActivities: () => dispatch(fetchActivities()),
        deleteActivity: (avtivityId) => dispatch(deleteActivity(avtivityId)),
        updateActivity: (activity) => dispatch(updateActivity(activity)),
    }
};

export default connect(msp, mdp)(ActivityIndex)