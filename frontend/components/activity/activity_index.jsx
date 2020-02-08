import React from 'react';
// import ActivityIndexItem from './activity_index_item';


class ActivityIndex extends React.Component {
    componentDidMount() {
        this.props.fetchActivities(); 
    }

    render() {
      
        // let activities = Object.values(this.props.activities).reverse().map(activity => {
        //     return (
        //         <ActivityIndexItem
        //             key={activity.id}
        //             activity={activity}
        //             updateActivity={this.props.updateActivity}
        //             deleteActivity={this.props.deleteActivity}
        //         />
        //     );
        // });

        // let actCount = Object.keys(this.props.activities).length;
        // let actCountDisp;
        // actCount === 1 ? actCountDisp = `1 Activity` : actCountDisp = `${actCount} Activities`


        // let routeCount = Object.keys(this.props.routes).length;
        // if (routeCount === 0) {
        //     return (
        //         <div>
        //             <h1>You don't have any routes. Create routes to record activities.</h1>
        //             <h1>Create New Route</h1>
        //         </div>
        //     )
        // }
        // return (
        //     <div>
        //         <div>
        //             <div>
        //                 <h1>My Activities</h1>
        //                 <h2>{actCountDisp}</h2>
        //                 <h1>Record a new activity</h1>
        //             </div>
        //             <div>
        //                 <table>
        //                     <thead>
        //                         <tr>
        //                             <th>Sport</th>
        //                             <th>Date</th>
        //                             <th>Title</th>
        //                             <th>Time</th>
        //                             <th>Distance</th>
        //                             <th>Elevation</th>
        //                         </tr>
        //                     </thead>
        //                     <tbody>{activities}</tbody>
        //                 </table>
        //             </div>
        //         </div>
        //     </div>
        // );
        return (
            <div>
                <div>
                    <h1>My Activities</h1>
                    <h2>15 Activities</h2>
                    <h1>Record a new activity</h1>
                </div>
                <table>
                        <thead>
                            <tr>
                                <th>Sport</th>
                                <th>Date</th>
                                <th>Title</th>
                                <th>Time</th>
                                <th>Distance</th>
                                <th>Elevation</th>
                            </tr>
                        </thead>
                        {/* <tbody>{activities}</tbody> */}
                </table>
            </div>
        )
        
    }
}

export default ActivityIndex;