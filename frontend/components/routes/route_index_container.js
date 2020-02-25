// import { connect } from 'react-redux';
// import RoutesIndex from './route_index';
// import { fetchRoutes, deleteRoute } from '../../actions/route_action';

// const msp = state => {
//     let routes = state.entities.routes;
//     return {
//         routes: routes,
//     }
// }

// const mdp = dispatch => {
//     return ({
//         fetchRoutes: () => dispatch(fetchRoutes()),  
//         deleteRoute: (routeId) => dispatch(deleteRoute(routeId))
//     })
// }

// export default connect(msp, mdp)(RoutesIndex);