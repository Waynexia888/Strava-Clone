// import { connect } from 'react-redux';
// import { fetchActivities, fetchActivity } from '../../actions/activity_action';
// import { fetchRoute, fetchRoutes } from '../../actions/route_action';
// import UserFeedIndex from './user_feed_index';

// const msp = state => {
//     let activities = state.entities.activities;
//     let routes = state.entities.routes;
//     const currentUser = state.entities.users[state.session.id]
//     return {
//         activities,
//         routes,
//         currentUser
//     };
// };

// const mdp = dispatch => {
//     return {
//         fetchActivities: () => dispatch(fetchActivities()),
//         fetchActivity: (id) => dispatch(fetchActivity(id)),
//         fetchRoute: (id) => dispatch(fetchRoute(id)),
//         fetchRoutes: () => dispatch(fetchRoutes())
//     }
// };

// export default connect(msp, mdp)(UserFeedIndex);