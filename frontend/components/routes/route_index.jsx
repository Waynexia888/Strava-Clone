import React from 'react';
import RouteIndexItem from './route_index_item';
import { Link } from 'react-router-dom';


class RouteIndex extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchRoutes();
    }

    render() {
        // if (this.props.routes.length === 0) return null;
        
        let routes = Object.values(this.props.routes).reverse().map(route => {
            return (
                <RouteIndexItem
                    key={route.id}
                    route={route}
                    deleteRoute={this.props.deleteRoute}
                />
            );
        });
        return (
            <div>
                <div>
                    <div>
                        <h1>My Routes</h1>
                        <button><Link to={'routes/new'}>Create New Route</Link></button>
                    </div>
                    
                    <ul>
                        {routes}
                    </ul>
                </div>
            </div>
        );
    };
};

export default RouteIndex;