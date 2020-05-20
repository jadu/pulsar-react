import React from 'react';

export default class Link extends React.Component {

  render() {
    let {
      children,
      ...props
    } = this.props;

    return <a {...props}>{children}</a>;
  }
}
