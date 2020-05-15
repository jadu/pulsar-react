import React from 'react';
import classnames from 'classnames';

export default class TimeInput extends React.Component {

  static defaultProps = {
    className: 'form__control',
    type: 'time'
  };

  render() {
    let {
      ariaDescribedby,
      className,
      id,
      idGuid,
      width,
      ...props
    } = this.props;

    let inputClassName = classnames(className, {
      [`form__control-col--${width}`]: width
    });

    return (
      <input 
        className={inputClassName}
        id={id ? id : idGuid} 
        aria-describedby={ariaDescribedby}
        {...props} 
      />
    );
  }
}