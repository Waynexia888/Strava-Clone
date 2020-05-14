import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const Greeting = ({ currentUser, logout, openModal }) => {

    const sessionLinks = () => (
        <nav className="login-signup">
            <button className="login-button btn" onClick={() => openModal('login')}>Login</button>
            &nbsp;or&nbsp;
      <button className="login-button btn" onClick={() => openModal('signup')}>Signup</button>
        </nav>

    );

    const dashBoardHeader = () => (
        <hgroup className="header-group">
            <ul className="global-nav nav-group">
                <li className="drop-down-menu feature dash">Dashboard
                    <p>ˇ</p>
                    <ul className="options feats">
                        <Link to="/routes"><li className="list-option">
                            My Routes
                        </li></Link>
                    </ul>
                </li>
                <li className="drop-down-menu feature">Training
                    <p>ˇ</p>
                    <ul className="options feats">
                        <Link to="/activities"><li className="list-option">
                            My Activites
                        </li></Link>
                    </ul>
                </li>
            </ul>
            <ul className="user-nav nav-group">
                <li className="personal-site">
                    <button className="upgrade">
                        <a href="https://www.strava.com/summit/join">Upgrade</a>
                    </button>
                </li>
                <li className="drop-down-menu nav">
                    <div className="avatar-wrapper"><div className="avatar-img nav-av"></div></div>
                    <ul className="options prof-nav">
                        <Link to='/dashboard'><li className="list-option">My Profile</li></Link>
                        <li className="list-option" onClick={logout}>Log Out</li>
                    </ul>
                </li>
            </ul>
        </hgroup>
    );

    return currentUser ? dashBoardHeader() : sessionLinks();
};


export default withRouter(Greeting);


