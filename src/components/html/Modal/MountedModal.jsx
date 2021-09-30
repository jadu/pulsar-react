import React from "react";
import ModalPortal from "./ModalPortal";
import Modal from "./Modal";

export default class MountedModal extends React.Component {
    componentDidMount() {
        let shownModal = document.querySelector('.modal.in');
        if (shownModal) {
            shownModal.setAttribute('style', 'display:none');
            shownModal.setAttribute('data-shown-modal', 'true');
        }
    }

    componentWillUnmount() {
        let shownModal = document.querySelector('[data-shown-modal=true]');
        if (shownModal) {
            shownModal.setAttribute('style', 'display:block');
            shownModal.removeAttribute('data-shown');
        }
    }

    render() {
        return <ModalPortal portalId="react-modal-container">
            <Modal style={{display: 'block'}} className={`${this.props.large ? 'modal--large' : ''} in`}>
                {this.props.children}
            </Modal>

            <div className="modal__backdrop in" />
        </ModalPortal>
    }
}
