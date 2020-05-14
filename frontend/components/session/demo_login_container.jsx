import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Demo from './demo';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: 'Demo Log In',
    user: { username: 'demo', password: '123456' }
})

const mapDispatchToProps = dispatch => ({
    submitAction: user => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Demo);