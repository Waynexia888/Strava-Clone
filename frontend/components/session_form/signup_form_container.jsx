// import { connect } from 'react-redux';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { signup, login } from '../../actions/session_actions';
// import SessionForm from './session_form';
// import { clearErrors } from '../../actions/error_actions'

// const mapStateToProps = ({ errors }) => {
//     return {
//         errors: errors.session,
//         formType: 'signup',
//         // navLink: <Link to="/login">log in instead</Link>,
//         otherFormType: 'log in',
//         otherRoute: '/login'
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         // submitAction: user => dispatch(signup(user)),
//         processForm: (user) => dispatch(signup(user)),
//         demoLogin: (user) => dispatch(login(user)),
//         clearErrors: () => dispatch(clearErrors()),
//         // login: user => dispatch(login(user)),
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

import React from 'react';
import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign Up',
    };
};

const mdp = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('login'))}>
                Log In
            </button>
        ),
        login: (user) => dispatch(login(user)),
        closeModal: () => dispatch(closeModal())
    }
};

export default connect(msp, mdp)(SessionForm);