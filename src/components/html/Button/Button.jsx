import React from 'react';
import classnames from 'classnames';

export default class Button extends React.Component {

  static defaultProps = {
    className: 'btn',
    tag: 'button'
  };

  render() {
    let {
      ariaDescribedby,
      children,
      className,
      danger,
      href,
      id,
      idGuid,
      inverse,
      naked,
      outline,
      primary,
      small,
      tag,
      success,
      warning,
      ...props
    } = this.props;

    let ButtonTag = href ? 'a' : tag;

    let variantClasses = classnames(className, {
      'btn--danger': danger,
      'btn--inverse': inverse,
      'btn--naked': naked,
      'btn--outline': outline,
      'btn--primary': primary,
      'btn--success': success,
      'btn--small': small,
      'btn--warning': warning
    });

    return (
      <>
        <ButtonTag 
          className={variantClasses}
          href={href ? href : null}
          {...props}
        >
          {children}
        </ButtonTag>
      </>
    );
  }
}
