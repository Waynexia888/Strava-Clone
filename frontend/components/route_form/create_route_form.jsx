import React from 'react';
import { withRouter } from 'react-router-dom';


class CreateRouteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: props.userId,
            route_data: props.routeDataString,
            title: "",
            description: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const route = Object.assign({}, this.state);

        this.props.createRoute(route).then((route) => {
            this.props.closeModalSave();
            this.props.history.replace(`/routes/${route.id}`);
        });

    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

    render() {
        const errors = this.props.errors.map((error, i) => {
            return (
                <li key={`error-${i}`}>{error}</li>
            )
        });

        return (
            <div className='route-form-container'>
                <section className='save-header'>
                    <h1>Save a Route</h1>
                </section>
                <section className="save-paragraph">
                    <p>
                        Enter a name and description for your route below. On the next page, you'll be able to see, edit, and share your route.
                    </p>
                </section>
                <form className='route-form-box' onSubmit={this.handleSubmit}>
                    <ul className="errors route-errors">
                        {errors}
                    </ul>
                    <div className="route-form">
                        <div className='name-input'>
                            <section className="save-paragraph"><label>
                                Route Name (required)
                            </label></section>
                            <input type="text"
                                    value={this.state.title}
                                    onChange={this.update('title')}
                                    className='route-input' /> 
                        </div>

                        <div className="name-input">
                            <section className="save-description"><label>
                                Description</label></section>
                            <textarea type="text"
                                    value={this.state.description}
                                    onChange={this.update('description')}
                                    className='route-input'></textarea>
                        </div>
                        <div className="new-route-buttons">
                            <input type="submit" value="Save" className="route-save" />
                            <button id="cancel-btn" onClick={this.props.closeModalSave}>Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(CreateRouteForm);