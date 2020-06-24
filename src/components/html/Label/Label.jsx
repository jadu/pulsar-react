import React from 'react';
import classnames from 'classnames';

export default class Button extends React.Component {

  static defaultProps = {
    className: 'label'
  };

  render() {
    let {
      children,
      className,
      danger,
      info,
      inverse,
      large,
      primary,
      success,
      warning,
      white,
      ...props
    } = this.props;

    let variantClasses = classnames(className, {
      'label--danger': danger,
      'label--info': info,
      'label--inverse': inverse,
      'label--large': large,
      'label--primary': primary,
      'label--success': success,
      'label--warning': warning,
      'label--white': white
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
