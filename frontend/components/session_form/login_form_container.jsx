// import { connect } from 'react-redux';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { login } from '../../actions/session_actions';
// import SessionForm from './session_form';
// import { clearErrors } from '../../actions/error_actions'

// const mapStateToProps = ({ errors }) => {
//     return {
//         errors: errors.session,
//         formType: 'log in',
//         // navLink: <Link to="/signup">sign up instead</Link>,
//         otherFormType: 'sign up',
//         otherRoute: '/signup'
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         processForm: (user) => dispatch(login(user)),
//         // submitAction: user => dispatch(login(user)),
//         // login: user => dispatch(login(user)),
//         clearErrors: () => dispatch(clearErrors()),
//         demoLogin: (user) => dispatch(login(user)),
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Log In',
    };
};

const mdp = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
                Signup
            </button>
        ),
        login: (user) => dispatch(login(user)),
        closeModal: () => dispatch(closeModal())
    }
};

export default connect(msp, mdp)(SessionForm);