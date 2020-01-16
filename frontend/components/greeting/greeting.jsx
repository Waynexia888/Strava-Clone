import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (

        <div id="nav-bar-container"> 
         
            <div className="headNav">
                <Link className = "removeLink" to="/"><h1>Stracker</h1></Link>
            </div>
            
            <div className="headFont">
                <ul>
                    <li><Link className="active" to="/login" >Login</Link></li>
                    {/* &nbsp;or&nbsp; */}
                    <li><Link className="active" to="/signup">Sign up</Link></li>
                </ul>
            </div>
            
             
        </div>
    );
    const personalGreeting = (currentUser, createRoute) => (
        <hgroup className="dash-viewport">
            <header className="nav-header">
                <div className="nav-header-content container dash-nav-head">
                    <div>
                        <div className="splash-logo"> 
                            <Link to={"/"}><h1>Stracker</h1></Link>
                        </div>
                        <div className="routes-fake-link">
                            <p>Dashboard</p>
                        </div>
                        <div className="routes-fake-link">
                            <Link className="a" to={"/routes"}>Routes</Link>
                        </div>
                        <div className="routes-fake-link">
                            <Link className="a" to={"/activities"}>Activities</Link>
                        </div>
                    </div>

                    <nav>
                        <button className="logout-btn" onClick={logout}>Log Out</button>
                    </nav>
                </div>
            </header>
                {/* <p className="header-name">Welcome, Wayne</p>
                <div>
                    <Link className="navlink" to="/routes/index">My Routes</Link>
                    <button className="navlink" onClick={logout}>Log Out</button>
                </div> */}
                {/* <ul>
                    <li id="activities-btn">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li id="routes-btn">
                        <Link to="/routes">My Routes</Link>
                    </li>
                </ul>   */}
       
            {/* <nav className="right-nav">
                <ul>
                    <li><h3 className="header-name">Hi, Wayne</h3></li>
                </ul> 

                <li className="nav-icon dropdown-container">
                    <a href="" id="dropdown-btn">
                        <div className="user-nav-avatar">
                            <i className="small-profile-pic"></i>
                        </div>
                        <div className="nav-avatar-chevron">
                            <i className="material-icons md-18">keyboard_arrow_down</i>
                        </div>
                    </a> 
                    <ul className="dropdown-content">
                        <li>
                            <button className="header-button" onClick={logout}>Log out</button>
                        </li>
                    </ul>
                </li>

                <li className="nav-icon dropdown-container">
                    <a href="">
                        <div>
                            <i className="material-icons md-24 circle-show">add_circle_outline</i>
                            <i className="material-icons md-24 circle-hidden">add_circle</i>
                        </div>
                    </a> 


                    <ul className="dropdown-content">
                        <li>
                            <a className="header-button" href="#/activities/new">Add new activity</a>
                        </li>
                        <li>
                            <a className="header-button" href="#/routes/new">Create a route</a>
                        </li>
                    </ul>


                </li>
            </nav>
            */}
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
