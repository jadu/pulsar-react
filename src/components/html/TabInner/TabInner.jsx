import React from 'react';

export default class TabInner extends React.Component {

  render() {
    let {
      children,
    } = this.props;

    return (
      <div className="tab__inner">
        {children}
      </div>
    );
  }
}
