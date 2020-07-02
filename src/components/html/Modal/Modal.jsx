import React from 'react';
import classnames from 'classnames';

export default class Modal extends React.Component {

  static defaultProps = {
    className: 'modal'
  };

  render() {
    let {
      children,
      className,
      danger,
      ...props
    } = this.props;

    let variantClasses = classnames(className, 'modal', {
      'modal--danger': danger,
    });

    return <div aria-modal="true" role="dialog" className={variantClasses} {...props}>
  	  <div className="modal__dialog">
        <div className="modal__content">
    	  {children}
        </div>
      </div>
    </div>;
  }
}
