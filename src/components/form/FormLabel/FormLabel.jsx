import React from 'react';
import classnames from 'classnames';

export default class FormLabel extends React.Component {
  render() {
    let {
      className,
      hideLabel,
      htmlFor,
      idGuid,
      labelText, 
      required,
      ...props} = this.props;

    let labelClasses = classnames('control__label', className, {
      'hide': hideLabel
    });

    let requiredIndicator = required && (
      <span aria-hidden="true" className="required-indicator" data-tippy-content="required">*</span>
    );

    return (
      <>
      {labelText ? (
        <label 
          htmlFor={htmlFor ? htmlFor : idGuid} 
          className={labelClasses}
        >
          {labelText}
          {requiredIndicator}
        </label>
      )
      : (
        <span className="control__label"></span>
      )}
      </>
    );
  }
}