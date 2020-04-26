import merge from 'lodash/merge';
import { RECEIVE_ALL_ACTIVITIES } from '../actions/activity_action';
import { RECEIVE_COMMENT, REMOVE_COMMENT, RECEIVE_COMMENTS } from '../actions/comment_actions';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENT: 
      return merge({}, state, { [action.comment.id]: action.comment });
    // case RECEIVE_COMMENTS:
    //   return merge({}, action.comments)
    // case RECEIVE_ALL_ACTIVITIES:
    //   return merge({}, action.payload.comments)
    case REMOVE_COMMENT:
      let newState = merge({}, state);
      delete newState[action.commentId];
      return newState;
    default:
      return state;
  };
};

export default commentsReducer;