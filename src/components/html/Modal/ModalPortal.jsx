import React from "react";
import ReactDOM from "react-dom/client";

export default class ModalPortal extends React.Component {
    constructor(props) {
        super(props);
        this.portalElement = null;
        this.root = null;
    }

    componentDidMount() {
        var p = document.createElement('div');
        p.id = this.props.portalId;
        document.body.appendChild(p);

        this.portalElement = p;

        this.componentDidUpdate();
    }

    componentWillUnmount() {
        if (this.root) {
            this.root.unmount();
            this.root = null;
        }
        document.body.removeChild(this.portalElement);
    }

    componentDidUpdate() {
        if (!this.root) {
            this.root = ReactDOM.createRoot(this.portalElement);
        }

        this.root.render(
            <React.Fragment>{this.props.children}</React.Fragment>
        );
    }

    render() {
        return null;
    }
}
