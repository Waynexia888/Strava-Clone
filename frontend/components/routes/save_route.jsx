import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';


class SaveRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            // user_id: this.props.route.user_id,
            route_data: this.props.routeDataString,
            show: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        const route = Object.assign({}, this.state);

        this.props.createRoute(route).then((route) => {
            this.props.closeModal();
            this.props.history.replace(`/routes/${route.id}`);
        });
    }



    componentDidMount() {

        // this.map = new google.maps.Map(this.mapNode, {
        //     zoom: 16,
        //     center: { lat: 37.7989687, lng: -122.4024461 },  // 825 Battery
        //     mapTypeId: 'terrain',
        //     mapTypeControl: false,
        // });
        
        // the following is referenced to google javascript api
        //https://developers-dot-devsite-v2-prod.appspot.com/maps/documentation/javascript/examples/marker-symbol-custom

        // let startPoint = new google.maps.Marker({
        //     position: this.routeData.path[0],
        //     label: { text: 'A', color: 'white' },
        //     map: map,
        //     icon: {
        //         path: google.maps.SymbolPath.CIRCLE,
        //         scale: 7.0,
        //         fillColor: "#049D1D",
        //         fillOpacity: 2.0,
        //         strokeWeight: 0.4
        //     },
        // });

        // let endPoint = new google.maps.Marker({
        //     position: this.routeData.path[this.routeData.path.length - 1],
        //     label: { text: 'B', color: 'white' },
        //     map: map,
        //     icon: {
        //         path: google.maps.SymbolPath.CIRCLE,
        //         scale: 7.0,
        //         fillColor: "#000",
        //         fillOpacity: 2.0,
        //         strokeWeight: 0.4
        //     },
        // });

        // let routePoly = new google.maps.Polyline({
        //     path: this.routeData.path,
        //     strokeColor: '#FF0000',
        //     strokeOpacity: 1.0,
        //     strokeWeight: 2,
        //     strokeOpacity: 1.0,
        //     map: map
        // })
    }



    update(field) {
        return (e) => {
            this.setState({
                [field]: e.target.value
            })
        };
    };


    render() {
        return (
            <div>
                <h1>Save</h1>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div>
                            <label>Route Name
                            <input
                                    type="text"
                                    value={this.state.title}
                                    placeholder={"Enter a description"}
                                    onChange={this.update("title")}
                                />
                            </label>
                        </div>
                        <div>
                            <label>Description
                            <input
                                    type="text"
                                    value={this.state.description}
                                    placeholder={"Enter a description"}
                                    onChange={this.update("description")}
                            />
                            
                            </label>
                        </div>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Save"
                        />
                        <button onClick={this.props.closeModal}>Cancel</button>
                    </div>

                </form>
            </div >
        )
    }
}

export default withRouter(SaveRoute);
