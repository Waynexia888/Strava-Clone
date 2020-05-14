import React from 'react';
import { Link } from 'react-router-dom';



const splash = () => {
    return (
        <div className="wrap">
            <div className="main-container">
                <h2 className="splash-message">The #1 app for runners and cyclists</h2>
                <div className="splash-content">
                    <img src="https://d3nn82uaxijpm6.cloudfront.net/assets/website/show_simple/devices-header-3349320fa849e6a297a3b0d64a6dfdef7307b0fe50f6329a459a0105b76ffff8.jpg" alt="" />
                </div>
                {/* <div className="splash-text">
                        <a className="broad-link" href="https://accounts.google.com/o/oauth2/auth?access_type=offline&client_id=541588808765.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fwww.strava.com%2Fo_auth%2Fgoogle&response_type=code&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fplus.login+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fplus.me+email+profile&state=%7B%22context%22%3A%22google_web_signup_flow_v1%22%2C%22state%22%3A%22eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdGF0ZV9wYXJhbSI6bnVsbH0.OkuxIgM74dkZudoQHhtChBj9xXMG7N4e_TtWTq4KfEA%22%7D">Sign up with Google</a>
                        <br />
                        <p>or</p>
                        <br />
                        <Link to="/signup"><button>Use my email</button></Link>
                        <br />
                        <br />
                        <p>Already a Member? <Link className="blue-link" to="/login">Log In</Link></p>
                    </div> */}
                {/* </div> */}

            </div>
        </div>
    )
}
//     <div className="wrap">
//         <div className="main-container">
//             <h2>#1 app for running and biking</h2>
//             <div className="devices image">
//                 <img src="https://d3nn82uaxijpm6.cloudfront.net/assets/website/show_simple/devices-header-3349320fa849e6a297a3b0d64a6dfdef7307b0fe50f6329a459a0105b76ffff8.jpg" alt="" />
//             </div>
//             <div className="signup-form-group">
//             </div>
//         </div>
//         {/* <footer className="footer">
//             <div id="footer-logo">
//                 <h1>STRIVE</h1>
//             </div>
//         </footer> */}
//         {/* <Footer /> */}

//     </div>
// )
export default splash;