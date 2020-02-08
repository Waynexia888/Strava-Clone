import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import SaveRouteContainer from '../routes/save_route_container';

class Modal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { modal, closeModal, routeData } = this.props;
        if (!modal) return null;

        switch (modal) {
            case 'save':
                this.component = <SaveRouteContainer routeData={routeData} />
                break;
            default:
                return null;
        }

        return (
            <div onClick={closeModal}>
                <div onClick={e => e.stopPropagation()}>
                    {this.component}
                </div>
            </div>
        );
    }




}


const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    }
};



const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);