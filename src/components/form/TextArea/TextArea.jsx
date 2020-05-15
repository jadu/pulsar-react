import React from 'react';
import classnames from 'classnames';

export default class TextArea extends React.Component {

  static defaultProps = {
    className: 'form__control textarea',
    rows: 2
  };

  render() {
    let {
      ariaDescribedby,
      className,
      children,
      id,
      idGuid,
      width,
      ...props
    } = this.props;

    let inputClassName = classnames(className, {
      [`form__control-col--${width}`]: width
    });

    return (
      <textarea 
        className={inputClassName}
        id={id ? id : idGuid} 
        aria-describedby={ariaDescribedby} 
        {...props} 
      >
        {children}
      </textarea>
    );
  }
}