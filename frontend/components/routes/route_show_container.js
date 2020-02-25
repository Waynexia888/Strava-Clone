// import { connect } from 'react-redux';
// import RouteShow from "./route_show";
// import { fetchRoute, deleteRoute } from "../../actions/route_action";

// // const mapStateToProps = (state, ownProps) => {
// //     let routeId = ownProps.match.params.routeId;
// //     let route = state.entities.routes[routeId];
// //     let locations = Object.values(state.entities.locations);
// //     // let user;
// //     return ({
// //         routeId: routeId,
// //         route: route,
// //         locations: locations.filter(location => location.route_id == routeId),
// //         // user: user,
// //     })
// // }

// const mapStateToProps = (state, { match }) => {
//     const routeId = parseInt(match.params.routeId);
//     // const route = selectRoute(state.entities.routes, routeId);
//     return ({
//         routeId,
//         // route
//     })
// }


// const mapDispatchToProps = (dispatch) => {
//     return ({
//         fetchRoute: (routeId) => dispatch(fetchRoute(routeId)),
//         deleteRoute: (routeId) => dispatch(deleteRoute(routeId)),
//     })
// }

// export default connect(mapStateToProps, mapDispatchToProps)(RouteShow);