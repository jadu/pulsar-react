import React from 'react';
import classnames from 'classnames';

export default class Button extends React.Component {

  static defaultProps = {
    className: 'badge'
  };

  render() {
    let {
      children,
      className,
      danger,
      info,
      inverse,
      naked,
      outline,
      primary,
      small,
      success,
      warning,
      white,
      ...props
    } = this.props;

    let variantClasses = classnames(className, {
      'badge--danger': danger,
      'badge--info': info,
      'badge--inverse': inverse,
      'badge--primary': primary,
      'badge--success': success,
      'badge--warning': warning,
      'badge--white': white
    });

    return (
      <React.Fragment>
        <span 
          className={variantClasses}
          {...props}
        >
          {children}
        </span>
      </React.Fragment>
    );
  }
}
