// import { connect } from 'react-redux';
// import { createActivity } from '../../actions/activity_action';
// import { fetchRoutes } from '../../actions/route_action';
// import { closeModalAct } from '../../actions/modal_actions';
// import ActivityForm from './activity_form';

// const msp = state => {
//     const activity = {
//         title: '',
//         time: '',
//         description: '',
//     }
//     const formType = 'Record Activity';
//     const currentUserId = state.session.id;
//     const routes = state.entities.routes;
//     const routeId = state.ui.routeData.routeId;
//     const routeData = JSON.parse(state.ui.routeData.dataString);
//     const sport = routeData.sport;
//     const distance = routeData.distance;
//     const elevation = routeData.elevation;
//     const errors = state.errors.activities;
//     return ({
//         userId: currentUserId,
//         activity,
//         routes,
//         routeId,
//         sport,
//         distance,
//         elevation,
//         formType,
//         errors
//     });
// };

// const mdp = dispatch => {
//     return ({
//         action: (activity) => dispatch(createActivity(activity)),
//         fetchRoutes: () => dispatch(fetchRoutes()),
//         closeModalAct: () => dispatch(closeModalAct())
//     });
// };

// export default connect(msp, mdp)(ActivityForm);