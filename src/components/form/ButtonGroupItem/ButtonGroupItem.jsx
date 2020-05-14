import React from 'react';
import classnames from 'classnames';
import FormLabel from '../FormLabel';

export default class ButtonGroupItem extends React.Component {

  static defaultProps = {
    className: 'form__control',
    type: 'radio',
    required: false
  };

  render() {
    let {
      ariaDescribedby,
      children,
      className,
      id,
      idGuid,
      type,
      ...props
    } = this.props;

    let inputClassName = classnames(className, type);

    return (
      <>
        <input 
          className={inputClassName}
          id={id ? id : idGuid} 
          type={type}
          aria-describedby={ariaDescribedby}
          {...props} 
        />
        <FormLabel
          htmlFor={id ? id : idGuid}
        >
          {children}
        </FormLabel>
      </>
    );
  }
}