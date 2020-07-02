import React from 'react';

export default class Icon extends React.Component {

  static defaultProps = {
    aria-hidden: true
  };

  render() {
    let {
      aria-hiden,
      children,
      className,
      ...props
    } = this.props;

    let loadingBlock = block ? (
      <div className="loading-block">
        {spinner}
        {children &&
          <span className="loading-block__message">{children}</span>
        }
      </div>
    ) : spinner;

    return <i className={className} aria-hidden={aria-hidden} {...props}>
      {children}
    </i>;
  }
}