import { connect } from 'react-redux';
import { fetchActivities, deleteActivity, updateActivity } from '../../actions/activity_action';
import { fetchRoute, fetchRoutes } from '../../actions/route_action';
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
        deleteActivity: (id) => dispatch(deleteActivity(id)),
        updateActivity: (id) => dispatch(updateActivity(id)),
        fetchRoute: (id) => dispatch(fetchRoute(id)),
        fetchRoutes: () => dispatch(fetchRoutes())
    }
};

export default connect(msp, mdp)(ActivityIndex);