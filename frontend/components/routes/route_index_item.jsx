import React from 'react';

import IndexRoute from './index_route';



const RouteIndexItem = (props) => {

    let route = props.route;

    return (
        <div>
            <div>
                <IndexRoute route={route} />
            </div>
        </div>
    )
}

export default RouteIndexItem;

