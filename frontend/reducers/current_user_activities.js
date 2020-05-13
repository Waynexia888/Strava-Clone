import {
    RECEIVE_CURRENT_USER_ACTIVITIES
} from '../actions/activity_action';
import merge from 'lodash/merge';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER_ACTIVITIES:
            return merge({}, state, action.payload.activities);
        default:
            return state;
    }
}