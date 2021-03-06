
import React from 'react';
import { connect } from 'react-redux';
import { fetchActivity, fetchActivities } from '../../actions/activity_actions';
import { fetchRoutes } from '../../actions/route_action';
import { Link } from 'react-router-dom';
import UserFeedIndexContainer from '../user_feed/user_feed_index_container';

const msp = ({ session, entities: { users, activities, routes } }) => {

    const actIds = Object.keys(activities);
    const latestActivity = activities[actIds[actIds.length - 1]];
    const activityCount = actIds.length;
    const routeCount = Object.keys(routes).length;

    let numRides = 0;
    let rideMiles = 0;
    let runMiles = 0;
    let numRuns = 0;
    actIds.forEach(id => {
        if (activities[id].sport === "bike") {
            numRides += 1;
            rideMiles += parseInt(activities[id].distance.toFixed(2));
        } else {
            numRuns += 1;
            runMiles += parseInt(activities[id].distance.toFixed(2));
        }
    })


    return {
        currentUser: users[session.id],
        activities,
        latestActivity,
        activityCount,
        routeCount,
        numRides,
        numRuns,
        rideMiles,
        runMiles
    };
};

const mdp = dispatch => {
    return {
        fetchActivity: (id) => dispatch(fetchActivity(id)),
        fetchActivities: () => dispatch(fetchActivities()),
        fetchRoutes: () => dispatch(fetchRoutes())
    }
}



class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.latestActivity = this.props.latestActivity;
        this.state = { sport: "bike", miles: this.props.rideMiles, num: this.props.numRides };

        this.dispRides = this.dispRides.bind(this);
        this.dispRuns = this.dispRuns.bind(this);
    }

    componentDidMount() {
        this.props.fetchActivities();
        this.props.fetchRoutes().then(routes => {
            this.dispRides();
        });

    }


    dispRides() {
        this.setState({ sport: "bike", miles: this.props.rideMiles, num: this.props.numRides });

    }

    dispRuns() {
        this.setState({ sport: "run", miles: this.props.runMiles, num: this.props.numRuns });
    }

    render() {

        return (
            <div className="dash-bg">
                {/* <div className="dashboard-container scroll"> */}
                    <div className="left-col">
                        <div className="profile">
                            <div className="card-body">
                                <div className="avatar-img prof-img">
                                </div>
                                <h3 id="username">{this.props.currentUser.username}</h3>
                                <div className="upper-card">
                                    <section className="followers-following-Activities">
                                        <div>
                                            <h3>Following</h3>
                                            <p>{this.props.routeCount + 4}</p>
                                        </div>
                                        <div id="short-border-right"></div>

                                        <div>
                                            <h3>Followers</h3>
                                            <p>{this.props.activityCount - 1}</p>
                                        </div>
                                        <div id="short-border-right"></div>

                                        <div>
                                            <h3>Activities</h3>
                                            <p>{this.props.activityCount}</p>
                                        </div>
                                    </section>
                                </div>
                            </div>
                            
                          
                            <div className="latest-activity">
                                {this.props.activityCount > 0 ? (
                                    <div className="lates-act-container">
                                        <div className="dash-stats">Latest Activity</div>
                                        <div className="act-title"><Link to={`activities/${this.props.latestActivity.id}`}><li>{this.props.latestActivity.title}</li></Link></div>
                                        <div className="dash-stats">{Date(this.props.latestActivity.created_at).slice(0, 15)}</div>
                                    </div>
                                ) :
                                    <div className="no-acts" id="no-act-message">No activties yet. <Link to={'activities/new'}>Record one!</Link></div>}
                            </div>
                            <Link className='dashboard-link' to='/activities'>
                                <h3>My Activity Log</h3>
                                <span className='chevron-container'>
                                    <i class="fa fa-chevron-right"></i>
                                </span>
                            </Link>

                           

                        </div>
                        <div className="tabbed-card">
                            <ul className="tabs">
                                <li id="rides">
                                    <div onClick={this.dispRides} className="tab tab1 icon-btn">
                                        <div id="bike" className="stat-icon" ></div>
                                    </div>
                                </li>
                                <li id="runs">
                                    <div onClick={this.dispRuns} className="tab icon-btn">
                                        <div id="run" className="stat-icon"></div>
                                    </div>
                                </li>
                            </ul>
                            <div className="second-card-body">
                                <div className="message-container">
                                    <div className="message-chev-container"></div>
                                    <span id="chev"></span>
                                    <div className="message-body">
                                    Log as many miles as you feel comortable. 
                                    Rest is essential. Never ever forget to 
                                        <strong><a id="hydrate">
                                            Hydrate!
                                        </a></strong>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body bottom-card">
                                <h4 className="total-stats">
                                    total {this.state.sport} miles
                                </h4>
                                <div className="primary-stats">
                                    {this.state.miles}
                                </div>
                                <h4 className="total-stats">
                                    total {this.state.sport}s
                                </h4>
                                <div className="primary-stats">
                                    {this.state.num}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard-feed">
                        {/* <h3 className="dashboard-activity-title">My Activities v</h3> */}
                        <div className="promo-card">
                            <div className="promo-image">
                                {/* <img
                                    id="promo-image"
                                    src={window.images.dashboard_image}
                                    
                                /> */}
                            </div>
                            <div className="promo-content">
                                <p><strong>Thanks for checking out Stracker!</strong> You can learn more about this project by visiting the Github repo below.</p>
                                <button type="button"><a href="https://github.com/Waynexia888/Strava-Clone" target="_blank">See Project</a></button>
                            </div>
                        </div>
                        <div className="feed-container">
                            <UserFeedIndexContainer />
                        </div>
                    </div>

                    <div className="right-col">
                        <div className="section" id="challenge">
                            <div className="media">
                                <div className="media-object">
                                    <img
                                        className="media-img"
                                        src={window.images.mountain_image}
                                        alt="challenge Icon" />
                                </div>
                                <div className="media-body">
                                    <h4 className="media-title">Challengess</h4>
                                    <p className="media-text">
                                        Join a run or cycling challenge to stay 
                                        on top of your game, earn new achievements and see how you stack up.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="section" id="vip">
                            <div className="media">
                                <div className="media-object">
                                    <img
                                        className="media-img"
                                        src={window.images.vip_image}
                                        alt="vip Icon" />
                                </div>
                                <div className="media-body">
                                    <h4 className="media-title">Vip Clubs</h4>
                                    <p className="media-text">
                                        Why do it alone? Get more out of your 
                                        experience by joining or creating a club.
                                    </p>
                                    <a className="media-link" href="https://www.strava.com/subscribe">
                                        Upgrade Today
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="section" id="private">
                            <div className="media">
                                <div className="media-object">
                                    <img
                                        className="media-img"
                                        src={window.images.private_image}
                                        alt="private Icon" />
                                </div>
                                <div className="media-body">
                                    <h4 className="media-title">Try a Privacy Zone</h4>
                                    <p className="media-text">
                                        You can hide the location of your home, 
                                        office or other private places in your activities.
                                    </p>
                                    <Link className="media-link" to={'routes/new'}>Hide the Location</Link>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="section" id="linked-in">
                            <div className="media">
                                <div className="media-object">
                                    <img
                                        className="media-img"
                                        src="https://image.flaticon.com/icons/svg/56/56591.svg"
                                        alt="linked-in Icon" />
                                </div>
                                <div className="media-body">
                                    <h4 className="media-title">My LinkedIn</h4>
                                    <p className="media-text">
                                        Check out my LinkedIn. It's got all the info
                                        you could ever need to hire me, Wayne Xia.
                                    </p>
                                    <a className="media-link" href="https://www.linkedin.com/in/wayne-xia-83690bb0/">
                                        View All the LinkedIn Stuff
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="section" id="github">
                            <div className="media">
                                <div className="media-object">
                                    <img
                                        className="media-img"
                                        src="https://cdn3.iconfinder.com/data/icons/social-icons-24/24/Github-512.png"
                                        alt="github Icon" />
                                </div>
                                <div className="media-body">
                                    <h4 className="media-title">My Github</h4>
                                    <p className="media-text">
                                        For more information on how this clone was built, and to see other code that I've pushed, take a look at my Github!
                                    </p>
                                    <a className="media-link" href="https://github.com/Waynexia888">
                                        View All the Github Stuff
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            // </div>
        )

    }
};

export default connect(msp, mdp)(Dashboard);