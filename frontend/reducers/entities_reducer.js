import { combineReducers } from 'redux';
import users from './users_reducer';
import activities from './activity_reducer';
import routes from './routes_reducer';
import comments from './comments_reducer';
import kudos from './kudos_reducer';
import currentUserActivities from './current_user_activities';

export default combineReducers({
    users,
    activities,
    routes,
    comments,
    kudos,
    currentUserActivities,
});
