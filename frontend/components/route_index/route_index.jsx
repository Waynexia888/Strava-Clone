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
            <div className="wrap">
                <div className="route-index-container container scroll">
                    <div className="index-bar">
                        <div className='route-index-header-left'>
                            <h1 className="route-heading">My Routes</h1>
                            <button id='create-route-btn'><Link to={'routes/new'}>Create New Route</Link></button>
                        </div>
                        <div className="route-index-header-right">
                            <img
                                id="route-builder-img"
                                src={window.images.route_builder_img}
                                alt="Route Build Pic"
                            />
                        </div>
                    </div>
                    <div className="bottom-border"></div>
                    <ul className="index-list">
                        {routes}
                    </ul>
                </div>
            </div>
        )
      
    };
};

export default RouteIndex;