import React from 'react';

export default class ErrorBlock extends React.Component {
  render() {
    if (!this.props.children) {
      return null;
    }

    let {
      children, 
      errorGuid,
      ...props} = this.props;

    return (
      <span id={errorGuid} className="help-block is-error">
        <i aria-hidden="true" className="icon-warning-sign"></i> {children}
      </span>
    );
  }
}
