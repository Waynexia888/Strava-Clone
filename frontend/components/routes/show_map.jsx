// import React from 'react';
// import { Link, withRouter } from 'react-router-dom';


// class ShowMap extends React.Component {
//     constructor(props) {
//         super(props);
//         this.routeData = JSON.parse(props.route.route_data);
//     }


//     componentDidMount() {
        
//         let map = new google.maps.Map(this.mapNode, {
//             // center: this.routeData.path[Math.floor(this.routeData.path.length / 2)],
//             center: { lat: 37.7989687, lng: -122.4024461 },
//             zoom: 16,
//             mapTypeId: 'terrain',
//             mapTypeControl: true,
//             mapTypeControlOptions: {
//                 style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
//                 mapTypeIds: ['roadmap', 'terrain']
//             }
//         });

//         let startPoint = new google.maps.Marker({
//             position: this.routeData.path[0],
//             label: { text: 'A', color: 'white' },
//             map: map,
//             icon: {
//                 path: google.maps.SymbolPath.CIRCLE,
//                 scale: 7.0,
//                 fillColor: "#049D1D",
//                 fillOpacity: 2.0,
//                 strokeWeight: 0.4
//             },
//         });

//         let endPoint = new google.maps.Marker({
//             position: this.routeData.path[this.routeData.path.length - 1],
//             label: { text: 'B', color: 'white' },
//             map: map,
//             icon: {
//                 path: google.maps.SymbolPath.CIRCLE,
//                 scale: 7.0,
//                 fillColor: "#000",
//                 fillOpacity: 2.0,
//                 strokeWeight: 0.4
//             },
//         });

//         let routePoly = new google.maps.Polyline({
//             path: this.routeData.path,
//             strokeColor: '#FF0000',
//             strokeOpacity: 1.0,
//             strokeWeight: 2,
//             strokeOpacity: 1.0,
//             map: map
//         })

//     }

//     render() {
//         return (
//             <div>
//                 <div className="my-map-show" ref={map => this.mapNode = map}></div>
//                 {/* <div id='elevation_chart'></div> */}
//                 <br />
//                 <div>
//                     <div>Sport: {this.routeData.sport} </div>
//                     <div>Distance: {this.routeData.distance} mi</div>
//                     <div>Est. Travel Time: {this.routeData.travelTime}</div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default withRouter(ShowMap);