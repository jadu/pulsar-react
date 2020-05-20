import React from 'react';

export default class OrderedList extends React.Component {

  render() {
    let {
      children,
      ...props
    } = this.props;

    return (
      <ol {...props}>
        {children}
      </ol>
    );
  }
}