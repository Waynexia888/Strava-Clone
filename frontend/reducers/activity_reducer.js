import merge from 'lodash/merge';
import {
    RECEIVE_ALL_ACTIVITIES,
    RECEIVE_ACTIVITY,
    REMOVE_ACTIVITY
} from '../actions/activity_action';


const activitiesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_ALL_ACTIVITIES:
            return merge({}, state, action.payload.activities);
        case RECEIVE_ACTIVITY:
            newState = merge({}, state, { [action.activity.id]: action.activity });
            return newState;
        case REMOVE_ACTIVITY:
            newState = merge({}, state);
            delete newState[action.activityId];
            return newState;
        default:
            return state;
    }
}

export default activitiesReducer;