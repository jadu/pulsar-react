import React from 'react';

export default class Icon extends React.Component {

  render() {
    let {
      children,
      className,
      name,
      ...props
    } = this.props;

    className = 'icon-' + name + (className ? ' ' + className : '');

    return <i className={className} aria-hidden={!children} {...props}>
      {children &&
        <span className="hide">
          {children}
        </span>
      }
    </i>;
  }
}
