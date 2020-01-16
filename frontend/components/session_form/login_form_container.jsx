import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { clearErrors } from '../../actions/error_actions'

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'log in',
        // navLink: <Link to="/signup">sign up instead</Link>,
        otherFormType: 'sign up',
        otherRoute: '/signup'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        // submitAction: user => dispatch(login(user)),
        // login: user => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors()),
        demoLogin: (user) => dispatch(login(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
