import React from "react";
import ModalPortal from "./ModalPortal";
import Modal from "./Modal";

export default class MountedModal extends React.Component {
    render() {
        if (this.props.show === false) {
            return null;
        }

        return <ModalPortal portalId="react-modal-container">
            <Modal style={{display: 'block'}} className={`${this.props.large ? 'modal--large' : ''} in`}>
                {this.props.children}
            </Modal>

            <div className="modal__backdrop in" />
        </ModalPortal>
    }
}
