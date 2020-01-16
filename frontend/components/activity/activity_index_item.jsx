import React from 'react';
import { Link } from 'react-router-dom';


const ActivityIndexItem = (props) => {

    let activity = props.activity;
    return (
        <tr>
            <td>{activity.sport}</td>
            <td>{Date(activity.created_at).slice(0, 15)}</td>
            <td><Link to={`activities/${activity.id}`}>{activity.title}</Link></td>
            <td>{activity.time}</td>
            <td>{activity.distance} mi</td>
            <td>{activity.elevation}</td>
            <td>
                <ul>
                    <li><button onClick={() => props.deleteActivity(activity.id)}>Delete</button></li>
                </ul>
            </td>
        </tr>
    )
}

export default ActivityIndexItem;