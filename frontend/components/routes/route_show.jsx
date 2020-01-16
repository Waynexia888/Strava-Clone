import React from "react";
import { Link } from 'react-router-dom';
import ShowMap from "./show_map";

class RouteShow extends React.Component {

    componentDidMount() {
        this.props.fetchRoute(this.props.routeId);
        this.deleteRoute = this.deleteRoute.bind(this);
    };

    deleteRoute() {
        this.props.deleteRoute(this.props.route.id).then(this.props.history.replace('/routes'));
    }


    render() {
        let route = this.props.route;
        return (
            <div>
                <div>
                    <h1>{route.title}</h1>
                    {route.route_data ? (<div><ShowMap route={route}/></div>) : null}
                    {/* <button id="delete-route-btn" onClick={this.deleteRoute}>Remove</button> */}
                </div>
            </div>
        )
    };
}

export default RouteShow;