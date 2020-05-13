import {
    RECEIVE_ALL_KUDOS,
    RECEIVE_KUDO,
    REMOVE_KUDO
} from '../actions/kudo_action';

import {
    RECEIVE_ALL_ACTIVITIES
} from '../actions/activity_action'

import merge from 'lodash/merge';

export default (state = {}, action) => {

    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_KUDOS:
            return merge({}, action.kudos)
        case RECEIVE_KUDO:
            return merge({}, state, {
                [action.kudo.id]: action.kudo
            })
        case RECEIVE_ALL_ACTIVITIES:
            return merge({}, action.payload.kudos)
        case REMOVE_KUDO:
            let newState = merge({}, state)
            delete newState[action.kudoId]
            return newState
        default:
            return state;
    }
};