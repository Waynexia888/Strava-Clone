import React from 'react';
import FeedRoute from '../route_map/feed_route';
import { Link } from 'react-router-dom';
import CommentIndex from '../activity/comments/comment_index'
import CommentFormContainer from '../activity/comments/comment_form_container'


class UserFeedIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            makeComment: false
        }
    
        this.timeStr = this.timeStr.bind(this);
        this.handleClick = this.handleClick.bind(this);
        // this.handleDeleteComment = this.handleDeleteComment.bind(this);
        
    }

    handleClick() {
        this.setState({ makeComment: !this.state.makeComment })
    }


    componentDidMount() {
        this.props.fetchActivity(this.props.activityId);

        if (this.props.routeId) {
            this.props.fetchRoute(this.props.routeId);
        }
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.route) {
            this.props.fetchRoute(this.props.activity.route_id);
        }
    }

    timeStr(timeStr) {
        let timeArr = timeStr.split(":");
        let hours = parseInt(timeArr[0]);
        let mins = parseInt(timeArr[1]);

        if (hours >= 0 && mins >= 0) {
            return `${hours}h ${mins}m`
        }

        return "n/a";

    }

    
    // displayKudosPics() {
    //     const { likes } = this.props;
    //     const 
    // }

    // handleDeleteComment(commentId) {
    //     let { deleteComment } = this.props;
    //     return () => {
    //         deleteComment(commentId);
    //     }
    // }

    // openedCommentModal() {

    // }


    // displayComments() {

    //     const { payload, currentUser } = this.props;
        
    //     if (payload.comments.length === 0) {
    //         return;
    //     } else {
    //         return payload.comments.map(comment => {
    //             const deleteable = comment.userId === currentUser.id ? <i className="fas fa-times comment-delete" onClick={this.handleDeleteComment(comment.id)}></i> : null;

    //             return <div className="comments-item" key={comment.id}>
    //                 {/* {this.commentPic(comment)} */}
    //                 <div className="avatar-img wrapper"></div>
    //                 <section>
    //                     <div className="comment-header">
    //                         <div className="comments-commenter">
    //                             {/* <Link className="profile-link" to={`/athletes/${comment.userId}`}> */}
    //                                 {comment.username}
    //                             {/* </Link> */}
    //                         </div>
    //                         {deleteable}
    //                     </div>
    //                     <div className="comments-body">{comment.body}</div>
    //                 </section>
    //             </div>
    //         }).slice(0, 2);
    //     }
    // }
    

    render() {
        const route = this.props.route;
        const activity = this.props.activity;

        return (
            <div className="activity-feed-entry">
                <div className="feed-entry-header">
                    <div className="avatar-img wrapper"></div>
                    <div className="media-body">
                        <div className="username"><strong>{this.props.user.username}</strong></div>
                        <div className="under-stats feed-date">{Date(activity.created_at).slice(0, 15)}</div>
                    </div>
                </div>
                <div className="feed-entry-body">
                    <div className="feed-icon">
                        {activity.sport === "bike" ? (
                            <span className="bike icon"></span>) :
                            <span className="run icon"></span>}
                    </div>
                    <div className="activity-info-container">
                        <div className="feed-title">
                            <strong><Link to={`activities/${activity.id}`}>{activity.title}</Link></strong></div>
                        <ul className="list-stats">
                            <li className="feed-stats">
                                <div className="under-stats">Distance</div>
                                {activity.distance} mi
                                </li>
                            {activity.elevation ? (
                                <li className="feed-stats">
                                    <div className="under-stats">Elevation</div>
                                    {activity.elevation} ft
                                </li>) : null}

                            {activity.time ? (
                                <li className="feed-stats">
                                    <div className="under-stats">Time</div>
                                    {this.timeStr(activity.time)}
                                </li>
                            ) : ""}
                        </ul>
                    </div>
                </div>
                {route ? (
                    <div className="feed-map-container">
                        <FeedRoute
                            route={route}
                        />
                    </div>
                ) : null}
                {"\n"}
                {/* <div className="feed-entry-header"></div> */}
                <div className="user-feedback">
                    <div className="like-comment">
                        {/* <p>9 kudos</p>
                        <p>8 comments</p> */}
                        {/* <div className="user-feedback-buttons">
                            <button>kudos</button>
                            <button className="feedback-button comment-button" >
                                <i className="far fa-comment"></i>
                            </button>
                        </div> */}
                        <div id='comment-icon' onClick={this.handleClick}>
                            <img src={window.images.comment_icon} alt="" />
                        </div>
                        <div id='comment-icon'>
                            <img src={window.images.like_icon} alt="" />
                        </div>

                    </div>
                    <div className="comment-section">
                       {/* <p>how are you</p>
                       <p>fine, thnak you</p>
                       <p>hhahaha</p> */}

                        <CommentIndex
                            users={this.props.users}
                            activity={this.props.activity}
                            currentUser={this.props.currentUser}
                            page={this.props.pages}
                        />

                        {this.state.makeComment ?
                            <CommentFormContainer activity={this.props.activity} /> :
                            ""
                        }

                        
                        

                    </div>
                </div>

            </div>
        )
    }
}

export default UserFeedIndexItem;