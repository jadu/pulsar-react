import React from 'react';

export default class TabContent extends React.Component {

  render() {
    let {
      children,
    } = this.props;

    return (
      <main className="tab__content" id="skip-target">
        {children}
      </main>
    );
  }
}
