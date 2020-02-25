import { connect } from 'react-redux';
import { fetchRoute, deleteRoute } from '../../actions/route_action';
import { selectRoute } from '../../reducers/selectors';
import RouteShow from './route_show';


const msp = (state, { match }) => {
    const routeId = parseInt(match.params.routeId);
    const route = selectRoute(state.entities.routes, routeId);
    return ({
        routeId,
        route
    })
}

const mdp = dispatch => {
    return ({
        fetchRoute: (id) => dispatch(fetchRoute(id)),
        deleteRoute: (id) => dispatch(deleteRoute(id))
    })
}

export default connect(msp, mdp)(RouteShow);