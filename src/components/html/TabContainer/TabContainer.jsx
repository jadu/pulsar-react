import React from 'react';

export default class TabContainer extends React.Component {

  render() {
    let {
      children,
      hasSettings
    } = this.props;

    let className = 'tab__container' + (hasSettings ? ' has-settings' : '');

    return (
      <div className={className}>
        {children}
      </div>
    );
  }
}
