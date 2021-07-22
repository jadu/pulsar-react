import React from "react";
import * as ReactDOM from "react-dom";

export default class ModalPortal extends React.Component {
    constructor(props) {
        super(props);
        this.portalElement = null;
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
        ReactDOM.unmountComponentAtNode(this.portalElement)
    }

    componentDidUpdate() {
        ReactDOM.render(
            <React.Fragment>{this.props.children}</React.Fragment>,
            this.portalElement
        );
    }

    render() {
        return null;
    }
}
