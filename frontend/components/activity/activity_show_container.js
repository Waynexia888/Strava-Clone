import { connect } from 'react-redux'
import { selectActivity, selectRoute } from '../../reducers/selectors';
import { fetchActivity } from '../../actions/activity_action';
import { fetchRoute } from '../../actions/route_action';
import ActivityShow from './activity_show';


const msp = (state, { match }) => {
    const activityId = parseInt(match.params.activityId);
    const activity = selectActivity(state.entities.activities, activityId);
    const routeId = activity.route_id;
    const route = selectRoute(state.entities.routes, routeId)
    const currentUser = state.entities.users[state.session.id]

    return ({
        activityId,
        activity,
        routeId,
        route,
        currentUser
    })
}

const mdp = dispatch => {
    return ({
        fetchRoute: (id) => dispatch(fetchRoute(id)),
        fetchActivity: (id) => dispatch(fetchActivity(id))
    })
}

export default connect(msp, mdp)(ActivityShow);


