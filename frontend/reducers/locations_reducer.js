import {
    RECEIVE_ROUTES,
    RECEIVE_ROUTE,
    REMOVE_ROUTE
} from "../actions/route_action";
import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from "../actions/session_actions";

const LocationsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    let newState;

    switch (action.type) {
        case RECEIVE_ROUTES:
            return action.locations;

        case RECEIVE_ROUTE:
            newState = Object.assign({}, oldState, action.locations);

            return newState;

        case LOGOUT_CURRENT_USER:
            return {}

        default:
            return oldState;
    }
};

export default LocationsReducer;