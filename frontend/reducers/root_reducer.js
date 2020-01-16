import { combineReducers } from 'redux';

import entities from './entities_reducer';
// import ui from './ui_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import routes from './routes_reducer';
import ui from './UI_state_reducer';

const rootReducer = combineReducers({
    entities,
    session,
    ui,
    errors,
    routes,
});

export default rootReducer;