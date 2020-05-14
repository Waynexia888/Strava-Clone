// import { connect } from 'react-redux';
// import { createRoute } from '../../actions/route_action';
// import CreateRouteForm from './create_route_form';
// import { closeModalSave, closeModal } from '../../actions/modal_actions';

// const msp = (state, ownProps) => {
//     const currentUserId = state.session.id;
//     const routeDataString = JSON.stringify(ownProps.routeData);
//     const errors = state.errors.routes;
//     return ({
//         userId: currentUserId,
//         routeDataString: routeDataString,
//         errors
//     })
// }

// const mdp = dispatch => {
//     return ({
//         createRoute: (route) => dispatch(createRoute(route)),
//         closeModalSave: () => dispatch(closeModalSave()),
//         closeModal: () => dispatch(closeModal())
//     })
// }

// export default connect(msp, mdp)(CreateRouteForm);