// // import React from 'react';
// // import { closeModal } from '../../actions/modal_actions';
// // import { connect } from 'react-redux';
// // import SaveRouteContainer from '../routes/save_route_container';

// // class Modal extends React.Component {
// //     constructor(props) {
// //         super(props)
// //     }

// //     render() {
// //         const { modal, closeModal, routeData } = this.props;
// //         if (!modal) return null;

// //         switch (modal) {
// //             case 'save':
// //                 this.component = <SaveRouteContainer routeData={routeData} />
// //                 break;
// //             default:
// //                 return null;
// //         }

// //         return (
// //             <div onClick={closeModal}>
// //                 <div onClick={e => e.stopPropagation()}>
// //                     {this.component}
// //                 </div>
// //             </div>
// //         );
// //     }




// // }


// // const mapStateToProps = state => {
// //     return {
// //         modal: state.ui.modal
// //     }
// // };



// // const mapDispatchToProps = dispatch => {
// //     return {
// //         closeModal: () => dispatch(closeModal())
// //     };
// // };

// // export default connect(mapStateToProps, mapDispatchToProps)(Modal);

// import React from 'react';
// import { closeModal } from '../../actions/modal_actions';
// import { connect } from 'react-redux';
// import LoginFormContainer from '../session/login_container';
// import SignupFormContainer from '../session/signup_container';
// import CreateRouteFormContainer from '../route_form/create_route_form_container';
// import NavContainer from '../nav-bar/nav_bar';
// import CreateActivityFormContainer from '../activity/create_activity_form_container';

// function Modal({ modal, closeModal, routeData, routeId }) {
//     if (!modal) {
//         return null;
//     }
//     let component;
//     switch (modal) {
//         case 'login':
//             component = <LoginFormContainer />;
//             break;
//         case 'signup':
//             component = <SignupFormContainer />;
//             break;
//         case 'save':
//             component = <CreateRouteFormContainer routeData={routeData} />
//             break;
//         case 'activity':
//             component =
//                 <CreateActivityFormContainer
//                     routeData={routeData}
//                     routeId={routeId}
//                 />
//             break;
//         case 'navigate':
//             component = <NavContainer />
//             break;
//         default:
//             return null;
//     }
//     return (
//         <div className="modal-background" onClick={closeModal}>
//             <div className="modal-child" onClick={e => e.stopPropagation()}>
//                 {component}
//             </div>
//         </div>
//     );
// }

// const mapStateToProps = state => {
//     const routeData = state.ui.routeData;
//     const routeId = state.ui.routeId;
//     if (routeData) {
//         return {
//             modal: state.ui.modal,
//             routeData,
//             routeId
//         }
//     } else {
//         return {
//             modal: state.ui.modal
//         }
//     }
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         closeModal: () => dispatch(closeModal())
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Modal);