import React from "react";

import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './session_form/splash';
// import DashboardContainer from './dashboard/dashboard_container';

// import PageNotFound from './page-not-found';
import RoutesIndexContainer from './routes/route_index_container';
import NewRoute from './routes/new_route_builder';
import RoutesShowContainer from './routes/route_show_container';
import ActivitiesIndexContainer from './activity/activity_index_container';
// import NewActivityFormContainer from './new_activity_form/new_activity_form_container';

// import Footer from './footer/footer';

const App = () => (
    <div className="mainPage"> 
            <GreetingContainer />
       
        <Switch>
            <AuthRoute exact path="/" component={Splash} />
            
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            {/* <Route exact path="/not_found" component={PageNotFound} /> */}
            {/* <Redirect to="/not_found" /> */}
            <ProtectedRoute exact path="/routes" component={RoutesIndexContainer} />
            <ProtectedRoute exact path="/routes/new" component={NewRoute} />
            <ProtectedRoute exact path="/routes/:routeId" component={RoutesShowContainer} />
            <ProtectedRoute exact path="/activities" component={ActivitiesIndexContainer} />
            
        </Switch>
    </div>
);

export default App;
