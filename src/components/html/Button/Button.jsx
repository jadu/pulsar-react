import React from 'react';
import classnames from 'classnames';

export default class Button extends React.Component {

  static defaultProps = {
    className: 'btn',
    tag: 'button'
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
      outline,
      primary,
      small,
      tag,
      success,
      warning,
      white,
      ...props
    } = this.props;

    let ButtonTag = href ? 'a' : tag;

    let variantClasses = classnames(className, {
      'btn--danger': danger,
      'btn--info': info,
      'btn--inverse': inverse,
      'btn--naked': naked,
      'btn--outline': outline,
      'btn--primary': primary,
      'btn--success': success,
      'btn--small': small,
      'btn--warning': warning,
      'btn--white': white
    });

    return (
      <React.Fragment>
        <ButtonTag 
          className={variantClasses}
          href={href ? href : null}
          {...props}
        >
          {children}
        </ButtonTag>
      </React.Fragment>
    );
  }
}
