import React from 'react';

export default class ModalBody extends React.Component {

  static defaultProps = {
    className: 'modal__body'
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
