import React from 'react';
import { Link } from 'react-router-dom';
// import GreetingContainer from '../greeting/greeting_container';

export default () => {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <section className='logo-column'>
                    <h2 className='footer-logo'>STRACKER</h2>
                </section>
                <section className='follow-column'>
                    <h2>FOLLOW</h2>
                    <div>
                        <a
                            href="https://github.com/Waynexia888"
                            target="_blank"
                            className="personal-adver"
                        >
                            GITHUB
            </a>
                    </div>
                    <div>
                        <a
                            href="https://www.linkedin.com/in/wayne-xia-83690bb0/"
                            className="personal-adver"
                            target="_blank"
                        >
                            LINKEDIN
            </a>
                    </div>
                </section>
                <section className='start-column'>
                    <h2>GET STARTED</h2>
                    <div><Link to="/signin">SIGN UP</Link></div>
                    <div><Link to="/signin">LOG IN</Link></div>
                </section>
            </div>
        </footer>
    )
}
