// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import SaveRoute from './save_route';
// import { fetchRoute, createRoute } from "../../actions/route_action";
// import { openModal, closeModal } from '../../actions/modal_actions';

// const mapStateToProps = (state, ownProps) => {
//     const currentUserId = state.session.id;
//     const routeDataString = JSON.stringify(ownProps.routeData);
//     return ({
//         userId: currentUserId,
//         routeDataString: routeDataString
//     })

// }

// const mapDispatchToProps = dispatch => ({
//     fetchRoute: routeId => dispatch(fetchRoute(routeId)),
//     createRoute: (route) => dispatch(createRoute(route)),
//     closeModal: () => dispatch(closeModal()),
//     // openModal: modal => dispatch(openModal(modal))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(SaveRoute);