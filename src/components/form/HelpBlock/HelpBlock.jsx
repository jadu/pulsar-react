import React from 'react';

export default class HelpBlock extends React.Component {
  render() {
    if (!this.props.children) {
      return null;
    }

    let {
      children,
      helpGuid,
      ...props} = this.props;

    return (
      <span id={helpGuid} className="help-block">{children}</span>
    );
  }
}