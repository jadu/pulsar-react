import React from 'react';
import classnames from 'classnames';
import FormLabel from '../FormLabel/FormLabel';

export default class ChoiceGroupItem extends React.Component {

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
      <FormLabel idGuid={idGuid}>
        <input 
          className={inputClassName}
          id={id ? id : idGuid} 
          aria-describedby={ariaDescribedby} 
          type={type}
          {...props} 
        />
        <span className="form-choice__label">
          {children}
        </span>
      </FormLabel>
    );
  }
}