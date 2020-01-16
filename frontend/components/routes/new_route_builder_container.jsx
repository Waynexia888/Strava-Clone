import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import NewRoute from './new_route_builder';
import { openModal } from '../../actions/modal_actions';

// const mapStateToProps = (state, ownProps) => {
//     const currentUserId = state.session.id;
//     const routeDataString = JSON.stringify(ownProps.routeData);
//     return({
//         userId: currentUserId,
//         routeDataString: routeDataString
//     })
// }

const mapDispatchToProps = dispatch => ({
    openModal: (dataString) => dispatch(openModal('save', dataString))
})

export default connect(null, mapDispatchToProps)(NewRoute);
