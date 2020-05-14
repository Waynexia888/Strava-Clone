import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        // this.navToRoutes = this.navToRoutes.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logout();
    }

    navToRoutes(e) {
        e.preventDefault();
        this.props.closeModal().then(this.props.history.replace('/routes'));

    }

    // render() {
    //     return (
    //         <div className='site-nav'>
    //             <div className='modal-child'>
    //                 <ul className="dropdown">
    //                     <li onClick={this.navToRoutes}>My Routes</li>
    //                     <li onClick={this.logout}>Log Out</li>
    //                 </ul>
    //             </div>
    //         </div>
    //     )
    // }
    render() {
        const { currentUser } = this.props;

        const submenuRight = currentUser ? (
            <ul className="drop-submenu-profile">
                <li className="drop-submenu-item ">
                    <Link className="drop-submenu-item" to={`/athletes/${currentUser.id}`}>My Profile</Link>
                </li>
                <li className="drop-submenu-item ">
                    <Link className="drop-submenu-item" to="/routes/new">Create a Route</Link>
                </li>
                <li className="drop-submenu-item ">
                    <a onClick={this.handleLogout}>Logout</a>
                </li>
            </ul>
        ) : null;

        const displayRight = currentUser ? (
            <div className="navbar-right-side">
                <span>
                    <nav className="drop-right">
                        <ul className="drop-menu">
                            <a className="tab-header">{'Account \u2228'}</a>
                            {submenuRight}
                        </ul>
                    </nav>
                </span>
            </div>
        ) : (
                <div className="navbar-right-side">
                    <span>
                        <Link className="btn" to="/signup">Sign Up</Link>
                    </span>
                    <span>
                        <Link className="btn" to="/login">Log In</Link>
                    </span>
                    <span>
                        <Link className="btn" to="/demo">Demo Log In</Link>
                    </span>
                </div>
            );

        const submenuLeft = (
            <ul className="drop-submenu-dash dash">
                <li className="drop-submenu-item">
                    <Link className='drop-submenu-item' to='/dashboard'>Activity Feed</Link>
                </li>
                <li className="drop-submenu-item">
                    <Link className="drop-submenu-item" to="/routes">My Routes</Link>
                </li>
                <li className="drop-submenu-item">
                    <Link className="drop-submenu-item" to="/training">My Activities</Link>
                </li>
            </ul>
        );

        const displayLeft = currentUser ? (
            <div className="navbar-left-side">
                <span>
                    <nav className="drop">
                        <ul className="drop-menu orange">
                            <a className="tab-header">{'Dashboard \u2228'}</a>
                            {submenuLeft}
                        </ul>
                    </nav>
                    <nav className="drop">
                        <ul className="drop-menu">
                            <a className="tab-header">{'Athletes \u2228'}</a>
                            <ul className="drop-submenu-dash friends">
                                <li className="drop-submenu-item">
                                    <Link className='drop-submenu-item' to='/athletes'>Find Athletes</Link>
                                </li>
                            </ul>
                        </ul>
                    </nav>
                </span>
            </div>
        ) : null;

        const routeBuilder = ['/routes/new', '/routes/edit/'];
        const urlRoute = routeBuilder
            .some(url => this.props.location.pathname.includes(url)) ?
            null :
            (<div className="navbar-main">
                <Link className="logo" to="/dashboard">STRACKER</Link>
                <section className="navbar-side">
                    <section>
                        {displayLeft}
                    </section>
                    <section>
                        {displayRight}
                    </section>
                </section>
            </div>
            );
        
        return (
            <div>
                {urlRoute}
            </div>
        );

    }
}



export default withRouter((Navbar));