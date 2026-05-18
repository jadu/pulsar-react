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
        document.body.removeChild(this.portalElement);
        this.root.unmount()
    }

    componentDidUpdate() {
        this.root = ReactDOM.createRoot(this.portalElement)
            .render(
                <React.Fragment>{this.props.children}</React.Fragment>
            );
    }

    render() {
        return null;
    }
}
