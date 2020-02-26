// import React from 'react';
// // import Background from '../../../app/assets/images/background_image_01.jpg';
// import { Link, withRouter } from 'react-router-dom';

// class SessionForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             email: '',
//             password: ''
//         };
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.demoLogin = this.demoLogin.bind(this);
//         // this.googleLogin = this.googleLogin.bind(this);
//         // this.handleDemoUser = this.handleDemoUser.bind(this);
//         this.handleClick = this.handleClick.bind(this);
//         this.errors = [];
//     }

//     update(field) {
//         return e => this.setState({
//             [field]: e.currentTarget.value
//         });
//     }

//     // componentWillUnmount() {
//     //     this.props.clearErrors();
//     // }

//     // googleLogin() {
//     //     this.props.login({ email: 'demouser@gmail.com', password: 'password' })
//     //         .then(() => this.props.history.push('/dashboard'));
//     // }

//     demoLogin() {
//         this.props.demoLogin({
//             username: "wayne8",
//             email: "wayne8@gmail.com",
//             password: "123456789"
//         });
//     }

//     handleSubmit(e) {
//         // console.log("sign up");
//         e.preventDefault();
//         const user = Object.assign({}, this.state);
//         this.props.processForm(user);
//         // this.props.submitAction(this.state)
//         //     .then(() => this.props.history.push('/dashboard'));
//     }

//     handleClick(e) {
//         e.preventDefault();
//         this.props.clearErrors();
//         this.props.history.push(this.props.otherRoute);
//     }

// ///////////
//     // handleDemoUser(e) {
//     //     if (e) {
//     //         e.preventDefault();
//     //     }
//     //     let demoUser = { username: 'demouser', password: 'password' };
//     //     this.setState(demoUser);
//     //     setTimeout(() => this.props.processForm(demoUser), 500);
//     // }
    
//     // componentDidMount() {
//     //     if (this.props.match.params.demo) {
//     //         this.handleDemoUser();
//     //     }
//     // }
//     ///////////////

//     renderErrors() {
//         return (
//             <ul>
//                 {this.props.errors.map((error, i) => (
//                     <li key={`error-${i}`}>
//                         {error}
//                     </li>
//                 ))}
//             </ul>
//         );
//     }

//     render() {
//         return (
//             <div className="login-form-container">
//                 {/* <h3 className='form-head'>{this.props.formType}</h3>
//                 {this.renderErrors()} */}
//                 <div className="splash-text">
//                     <h1 className="first-head">An app for athletes of all levels</h1>
//                     <h1 className="second-head">to track their rides and runs.</h1>
                    
//                     <h2> <a href="#/login" className="logo-login">Stracker.</a> </h2>
//                     <h2> Precision and Performance. </h2>
                    
//                 </div>

//                 <div className="login-panel">
              
//                 <form onSubmit={this.handleSubmit} className="login-form-box">
//                     Welcome to Stracker!
//                     <br />
//                     Please {this.props.formType} or <a onClick={this.handleClick} className="login-link" >{this.props.otherFormType}</a>
//                     <div className="login-errors" >
//                         {this.renderErrors()}
//                     </div>
//                     <div className="login-form">
//                         <br />
//                         <label>Username:
//                                 <input type="text"
//                                     value={this.state.username}
//                                     onChange={this.update('username')}
//                                     className="login-input"
//                                 />
//                          </label>
//                         <br />
//                         <label>Email:
//                             <input type="email"
//                                 value={this.state.email}
//                                 onChange={this.update('email')}
//                                 className="login-input"
//                             />
//                         </label>
//                         <br />
//                         <label>Password:
//                             <input type="password"
//                                 value={this.state.password}
//                                 onChange={this.update('password')}
//                                 className="login-input"
//                             />
//                         </label>
//                         {/* <div className='info'>
//                             <small>Password must be eight characters in length.</small>
//                         </div> */}
//                         <br />
//                         <input className="session-submit" type="submit" value={this.props.formType} />
//                         </div>
//                     </form>
//                     <button className="demo-submit" type="submit" onClick={this.demoLogin}>Demo Log in</button>
//                     </div>
//                 </div>
//         );
//     }
// }

// export default withRouter(SessionForm);

import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "", username: "", password: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal).then(this.props.history.push('/dashboard'));
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

    handleClick(e) {
        e.preventDefault();
        this.props.login({ email: "demo@gmail.com", username: "demo", password: "123456789" }).then(
            this.props.closeModal).then(this.props.history.push('/dashboard'));
    }

    render() {
        const errors = this.props.errors.map((error, i) => {
            return (
                <li key={`error-${i}`}>{error}</li>
            )
        });

        return (
            <div className="login-form-container">
                <form className="login-form-box" onSubmit={this.handleSubmit}>
                    <div onClick={this.props.closeModal} className="close-X"> X </div>
                    <h1>{this.props.formType}</h1>
                    <ul className="errors">
                        {errors}
                    </ul>
                    <div className="login-form">
                        <br />
                        <label>
                            <input type="text"
                                value={this.state.username}
                                placeholder="Username"
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>
                        <label>
                            <input type="text"
                                value={this.state.email}
                                placeholder="Your Email"
                                onChange={this.update('email')}
                                className="login-input"
                            />
                        </label>
                        <label>
                            <input type="password"
                                value={this.state.password}
                                placeholder="Password"
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <input type="submit" value={this.props.formType} className="session-submit" />
                        <button id="demo-login" onClick={this.handleClick}>Demo</button>
                    </div>
                </form>
            </div>
        )

    }
}

export default withRouter(SessionForm);
