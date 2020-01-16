import { connect } from 'react-redux';
import RouteShow from "./route_show";
import { fetchRoute, deleteRoute } from "../../actions/route_action";

const mapStateToProps = (state, ownProps) => {
    let routeId = ownProps.match.params.routeId;
    let route = state.entities.routes[routeId];
    let user;
    return ({
        routeId: routeId,
        route: route,
        // user: user,
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchRoute: (routeId) => dispatch(fetchRoute(routeId)),
        deleteRoute: (routeId) => dispatch(deleteRoute(routeId)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteShow);