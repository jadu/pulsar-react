import React from 'react';

export default class ModalFooter extends React.Component {

  static defaultProps = {
    className: 'modal__footer'
  };

  render() {
    let {
      children,
      className,
      ...props
    } = this.props;

  	return <div className={className} {...props}>
      {children}
    </div>;
  }
}
