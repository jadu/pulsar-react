import React from 'react';
import classnames from 'classnames';

export default class Button extends React.Component {

  static defaultProps = {
    className: 'btn'
  };

  render() {
    let {
      children,
      className,
      danger,
      inverse,
      naked,
      primary,
      success,
      warning,
      ...props
    } = this.props;

    let variantClasses = classnames(className, {
      'btn--danger': danger,
      'btn--inverse': inverse,
      'btn--naked': naked,
      'btn--primary': primary,
      'btn--success': success,
      'btn--warning': warning
    });

    return <button className={variantClasses} {...props}>{children}</button>;
  }
}
