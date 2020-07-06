import React from 'react';
import classnames from 'classnames';

export default class Button extends React.Component {

  static defaultProps = {
    className: 'btn',
    tag: 'button',
    type: ''
  };

  render() {
    let {
      children,
      className,
      danger,
      href,
      info,
      inverse,
      naked,
      nodeRef,
      outline,
      primary,
      small,
      tag,
      type,
      success,
      warning,
      white,
      ...props
    } = this.props;

    let ButtonTag = href ? 'a' : tag;

    let variantClasses = classnames(className, {
      'btn--danger': type === 'danger',
      'btn--info': type === 'info',
      'btn--inverse': type === 'inverse',
      'btn--naked': type === 'naked',
      'btn--outline': outline,
      'btn--primary': type === 'primary',
      'btn--success': type === 'success',
      'btn--small': small,
      'btn--warning': type === 'warning',
      'btn--white': type === 'white'
    });

    return (
      <React.Fragment>
        <ButtonTag 
          className={variantClasses}
          href={href ? href : null}
          ref={nodeRef}
          {...props}
        >
          {children}
        </ButtonTag>
      </React.Fragment>
    );
  }
}
