import merge from 'lodash/merge';
import {
    RECEIVE_ALL_ACTIVITIES
} from '../actions/activity_action';
import {
    RECEIVE_LIKE,
    REMOVE_LIKE,
    RECEIVE_LIKES
} from '../actions/like_action';


const likesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_LIKE:
            return merge({}, state, {
                [action.like.id]: action.like
            });
        case RECEIVE_LIKES:
            return merge({}, action.likes)
        case RECEIVE_ALL_ACTIVITIES:
            // return merge({}, action.payload.likes)
            return merge({}, action.activities)
        case REMOVE_LIKE:
            let newState = merge({}, state);
            delete newState[action.likeId];
            return newState;
        default:
            return state;
    };
};

export default likesReducer;
