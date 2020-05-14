import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.facebookLogin = this.facebookLogin.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    facebookLogin() {
        this.props.login({ username: 'DemoUser', password: 'password' })
            .then(() => this.props.history.push('/dashboard'));
    }

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submitAction(this.state)
            .then(() => this.props.history.push('/dashboard'));
    }

    renderErrors() {
        return (
            <div className="form-errors">
                {this.props.errors.map((error, i) => (
                    <ul key={`error-${i}`}>
                        {error}
                    </ul>
                ))}
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="form-container">
                    <h3 className='form-head'>{this.props.formType}</h3>
                    {this.renderErrors()}
                    <form>
                        <a className="facebook" onClick={this.facebookLogin}>{this.props.formType} using Demo</a>
                        <h3>Or {this.props.formType} With a Username</h3>
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                            placeholder="Username"
                        />

                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                            placeholder="Password"
                        />
                        <button onClick={this.handleSubmit}>{this.props.formType}</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SessionForm;
