import React from 'react';

export default class ListItem extends React.Component {

  render() {
    let {
      children,
      ...props
    } = this.props;

    return (
      <li {...props}>
        {children}
      </li>
    );
  }
}