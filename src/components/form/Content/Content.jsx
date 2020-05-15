import React from 'react';
import classnames from 'classnames';

export default class Content extends React.Component {

  render() {
    let {
      ariaDescribedby,
      className,
      children,
      idGuid,
      width,
      ...props
    } = this.props;

    let inputClassName = classnames(className, {
      [`form__control-col--${width}`]: width
    });

    return (
      <p
        className={inputClassName}
        {...props}
      >
        {children}
      </p>
    );
  }
}