import React from 'react';

export default class UnorderedList extends React.Component {

  render() {
    let {
      children,
      ...props
    } = this.props;

    return (
      <ul {...props}>
        {children}
      </ul>
    );
  }
}