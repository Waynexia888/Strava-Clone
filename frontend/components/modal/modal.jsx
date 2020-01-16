import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import RouteFormContainer from '../routes/route_form_container';

class Modal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { modal, closeModal, routeData } = this.props;
        if (!modal) return null;

        switch (modal) {
            case 'save':
                this.component = <RouteFormContainer routeData={routeData} />
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