import React from 'react';
// import { withRouter, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import RouteFormContainer from '../routes/route_form_container';


class NewRoute extends React.Component {
    constructor(props) {
        super(props);

        this.routeData = {};
        this.markers = [];
        this.waypoints = [];

        this.saveRoute = this.saveRoute.bind(this);
        this.clearRoute = this.clearRoute.bind(this);
        this.displayRoute = this.displayRoute.bind(this);
    }

    componentDidMount() {

        let that = this;

        this.map = new google.maps.Map(this.mapNode, {
            center: { lat: 37.789581, lng: -122.408423},
           
            zoom: 16,
            mapTypeId: 'terrain',
            mapTypeControl: false,
        })
       
        
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
    

        //adds place search bar with autocomplete, here are the reference document
        // https://chromatichq.com/blog/implementing-google-places-autocomplete-es6-part-one
      
        this.map.controls[google.maps.ControlPosition.RIGHT_TOP].push(
            document.getElementById('searchTextField'));
        const autocomplete = new google.maps.places.Autocomplete(
            document.getElementById('autoc'));
        autocomplete.bindTo('bounds', this.map); // set the bounds to the map's viewport
        // utilize these results by adding the custom google places listener, place_changed
        autocomplete.addListener('place_changed', function () {
            const place = autocomplete.getPlace();
            if (place.geometry.viewport) {
                that.map.fitBounds(place.geometry.viewport);
            } else {
                that.map.setCenter(place.geometry.location);
                that.map.setZoom(13);
            }
        });

        //to calculate elevations 
        this.elevator = new google.maps.ElevationService;

        //info popups for places
        this.infoWindow = new google.maps.InfoWindow;


        this.directionsService = new google.maps.DirectionsService;

        this.directionsDisplay = new google.maps.DirectionsRenderer({
            draggable: true,
            map: this.map,
        });

        //this is HTML5 geolocation,
        //https://developers.google.com/maps/documentation/javascript/geolocation
        if (navigator.geolocation) {
           
            navigator.geolocation.getCurrentPosition(position => {
                
                let pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                this.infoWindow.setPosition(pos);
                this.infoWindow.setContent('Location found.');
                this.infoWindow.open(this.map);
                this.map.setCenter(pos);
            }, () => {
                this.handleLocationError(true, this.infoWindow, this.map.getCenter());
            });
        } else {
            
            this.handleLocationError(false, this.infoWindow, this.map.getCenter());
        }


        // Add a listener for the click event
        google.maps.event.addListener(this.map, 'click', (event) => {
            const coords = event.latLng;
            this.handleClick(coords);
            this.waypoints.push(coords);
            if (this.waypoints.length === 2) {
                this.removeOriginalMarkers();
                this.displayRoute(this.waypoints[0], this.waypoints[1], this.directionsService, this.directionsDisplay);
            }

        });

        document.getElementById('mode').addEventListener('change', function () {
            that.displayRoute(that.waypoints[0], that.waypoints[1], that.directionsService, that.directionsDisplay);
        });

    }


    handleClick(coords) {
        if (this.markers.length > 1) return
        let marker = new google.maps.Marker({
            position: coords,
            map: this.map
        })
        this.markers.push(marker);
    }


    removeOriginalMarkers() {
        for (let i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(null);
        }
    }

    //displays the route and length in miles
    displayRoute(origin, destination, service, display) {
        let that = this;
        let selectedMode = document.getElementById('mode').value;
        selectedMode === 'WALKING' ? this.routeData['sport'] = 'run' : this.routeData['sport'] = 'bike';
        service.route({
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode[selectedMode],
        }, (response, status) => {
            if (status === 'OK') {
                display.setDirections(response);
                this.routeData['distance'] = that.getMiles(response.routes[0].legs[0].distance.value);
                if (this.routeData.sport === 'WALKING') {
                    this.routeData['travelTime'] = that.getTravelTime(
                        Math.floor(response.routes[0].legs[0].duration.value / 1.8));
                } else {
                    this.routeData['travelTime'] = that.getTravelTime(
                        Math.floor(response.routes[0].legs[0].duration.value / 1.3));
                }
                this.routeData['path'] = response.routes[0].overview_path;
                document.getElementById('distance').innerHTML =
                    "Distance: " + this.routeData['distance'] + " mi";
                document.getElementById('duration').innerHTML =
                    "Est. Travel Time: " + this.routeData['travelTime'];
            } else {
                alert('Could not display directions due to: ' + status);
            }
        });

    }

    clearRoute() {
        this.directionsDisplay.set('directions', null);
        document.getElementById('distance').innerHTML = "Distance:";
        document.getElementById('duration').innerHTML = "Est. Travel Time";
        this.markers = [];
        this.waypoints = [];
        this.routeData = {};
    }


    handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
    }

    getMiles(m) {
        return Number((m / 1609).toFixed(2));
    }

    getTravelTime(secs) {
        let hours = Math.floor(secs / 3600);
        let minutes = Math.floor((secs - (hours * 3600)) / 60);
        let seconds = secs - (hours * 3600) - (minutes * 60);
        if (minutes < 10) minutes = `0${minutes}`;
        if (seconds < 10) seconds = `0${seconds}`;

        return `${hours}:${minutes}:${seconds}`;
    }

    saveRoute() {
        if (Object.keys(this.routeData).length === 0) return
        this.props.openModal(this.routeData);
    }

    render() {
       
        return (
            <div>
                <div>
                    <div className="my-map-container" ref={map => this.mapNode = map}></div>
                    <div id="searchTextField">
                        <p><input type="text" id="autoc" size="60" placeholder="Anything you want!" /></p>
                        <button onClick={this.clearRoute}>Clear</button>
                        <button onClick={this.saveRoute}>Save</button>
                        <select id="mode">
                            <option value="WALKING">Run</option>
                            <option value="BICYCLING">Bike</option>
                        </select>
                    </div>
                    <div>
                        <div id='distance'>Distance: {this.routeData['distance']}</div>
                        <div id='duration'>Est. Travel Time: {this.routeData['travelTime']} </div>
                    </div>
                    <RouteFormContainer />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    }
};
const mdp = dispatch => {
    return ({
        openModal: (dataString) => dispatch(openModal('save', dataString))
    })
}

export default connect(mapStateToProps, mdp)(NewRoute);
