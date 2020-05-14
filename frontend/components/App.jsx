import React from "react";

import { Provider } from 'react-redux';

import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import Modal from './modal/modal';

import GreetingContainer from './greeting/greeting_container';
// import LogInFormContainer from './session_form/login_form_container';
// import SignUpFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash/splash';
import Dashboard from './dashboard/dashboard';

import NewRoute from './route_map/new_route';
import RouteShowContainer from './route_show/route_show_container';
import RouteIndexContainer from './route_index/route_index_container';

// import Footer from './footer/footer';

import ActivityRouteIndexContainer from './activity/activity_route_index_container';
import ActivityShowContainer from './activity/activity_show_container';
import ActivityIndexContainer from './activity/activity_index_container';


const App = () => (
    <div>
        <Modal />
        <div className="header-container">
            <header className="container login-header">
                <h1><Link id="logo" to={'/dashboard'}>STRACKER</Link></h1>
                <GreetingContainer />
            </header>
        </div>

        <Switch>
            <AuthRoute exact path="/" component={Splash} />
            <ProtectedRoute path="/dashboard" component={Dashboard} />

            {/* <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
            {/* <Route exact path="/not_found" component={PageNotFound} /> */}
            {/* <Redirect to="/not_found" /> */}
            <ProtectedRoute exact path="/routes/new" component={NewRoute} />
            <ProtectedRoute path="/routes/:routeId" component={RouteShowContainer} />
            <ProtectedRoute path="/routes" component={RouteIndexContainer} />
            {/* <ProtectedRoute exact path="/activities" component={ActivitiesIndexContainer} /> */}
            <ProtectedRoute exact path="/activities/new" component={ActivityRouteIndexContainer} />
            <ProtectedRoute exact path="/activities/:activityId" component={ActivityShowContainer} />
            {/* <ProtectedRoute exact path="/activities/:activityId/edit" component={EditActivityContainer} /> */}
            <ProtectedRoute path="/activities" component={ActivityIndexContainer} />
        </Switch>
    </div>
);

export default App;