import React from 'react';

export default class ActionsBar extends React.Component {

  render() {
    let {
      children,
    } = this.props;

    return (
      <section aria-label="Page Actions" className="actionsbar">
        {children}
      </section>
    );
  }
}
