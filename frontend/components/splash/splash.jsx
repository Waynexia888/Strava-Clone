import React from 'react';
import { Link } from 'react-router-dom';
// import img from '../../../app/assets/images/background_image_01.jpg';
// import Footer from '../footer/footer';

// const splash = () => (
//     <div className="splash">
//         <div className="splash-content">
//             <h1>The most popular site for</h1>
//             <h1>runners and cyclists</h1>
//             <h1>to track routes and workouts</h1>
        
//         </div>
//         <Footer />
//     </div>
// )


const splash = () => (
    <div className="wrap">
        <div className="main-container">
            <h2>#1 app for running and biking</h2>
            <div className="devices image">
                <img src="https://d3nn82uaxijpm6.cloudfront.net/assets/website/show_simple/devices-header-3349320fa849e6a297a3b0d64a6dfdef7307b0fe50f6329a459a0105b76ffff8.jpg" alt="" />
            </div>
            <div className="signup-form-group">
            </div>
        </div>
        {/* <footer className="footer">
            <div id="footer-logo">
                <h1>STRIVE</h1>
            </div>
        </footer> */}
        {/* <Footer /> */}
        
    </div>
)
export default splash;