import React from "react";

import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SignUpContainer from './session/signup_container';
import NavBarContainer from './nav-bar/nav_bar_container';
import LoginContainer from './session/login_container';
import DemoLoginContainer from './session/demo_login_container';
import Splash from './splash/splash';
import DashboardContainer from './dashboard/dashboard_container'

import NewRoute from './route_map/new_route';
import RouteShowContainer from './route_show/route_show_container';
import RouteIndexContainer from './route_index/route_index_container';

// import Footer from './footer/footer';

import ActivityRouteIndexContainer from './activity/activity_route_index_container';
import ActivityShowContainer from './activity/activity_show_container';
import ActivityIndexContainer from './activity/activity_index_container';


const App = () => (
    <div> 
        {/* <Modal />
        <div className="header-container">
            <header className="container login-header">
                <h1><Link id="logo" to={'/dashboard'}>STRACKER</Link></h1>
            <GreetingContainer />
            </header>
        </div> */}
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/" component={Splash} />
            {/* <ProtectedRoute path="/dashboard" component={DashboardContainer} /> */}
            {/* <ProtectedRoute exact path="/routes/new" component={NewRoute} />
            <ProtectedRoute path="/routes/:routeId" component={RouteShowContainer} />
            <ProtectedRoute path="/routes" component={RouteIndexContainer} />
            <ProtectedRoute exact path="/activities/new" component={ActivityRouteIndexContainer} />
            <ProtectedRoute exact path="/activities/:activityId" component={ActivityShowContainer} />
            <ProtectedRoute path="/activities" component={ActivityIndexContainer} /> */}
            <AuthRoute path="/signup" component={SignUpContainer} />
            <AuthRoute path="/login" component={LoginContainer} />
            <AuthRoute path="/demo" component={DemoLoginContainer} />
        </Switch>
    </div>
);

export default App;
