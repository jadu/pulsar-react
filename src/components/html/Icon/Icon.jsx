import React from 'react';

export default class Icon extends React.Component {

  render() {
    let {
      children,
      className,
      ...props
    } = this.props;

    let ariaHidden = this.props['aria-hidden'];
    if (ariaHidden === undefined) {
      ariaHidden = true;
    }

    return <i className={className} aria-hidden={ariaHidden} {...props}>
      {children}
    </i>;
  }
}
