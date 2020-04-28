import { RECEIVE_ACTIVITY_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT} from '../actions/comment_actions';
import { RECEIVE_ALL_ACTIVITIES } from '../actions/activity_action'
import merge from 'lodash/merge';

export default (state = {}, action) => {
    
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ACTIVITY_COMMENTS:
            return merge({}, action.comments)
        case RECEIVE_ALL_ACTIVITIES:
            let addComments = merge({}, state)
            Object.keys(action.activities).forEach(com => {
                return addComments[com] = action.activities[com]
            })
            return addComments;
        case RECEIVE_COMMENT:
            return merge({}, state, action.comment)
        case REMOVE_COMMENT:
            let newState = merge({}, state)
            delete newState[action.commentId]
            return newState
        default:
            return state;
    }
};