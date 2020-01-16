
import { RECEIVE_ROUTES, RECEIVE_ROUTE, REMOVE_ROUTE } from '../actions/route_action';

const routesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ROUTES:
            return action.routes;
        case RECEIVE_ROUTE:
            return Object.assign({}, state, { [action.route.id]: action.route })
        case REMOVE_ROUTE:
            delete nextState[action.routeId];
            return nextState;
        default:
            return state;
    }
};

export default routesReducer;
