import React from 'react';
import classnames from 'classnames';

export default class FormLabel extends React.Component {
  render() {
    let {
      children,
      className,
      hideLabel,
      htmlFor,
      idGuid,
      required,
      ...props} = this.props;

    let variantClasses = classnames('control__label', className, {
      'hide': hideLabel
    });

    let requiredIndicator = required && (
      <span aria-hidden="true" className="required-indicator" data-tippy-content="required">*</span>
    );

    return (
      <>
      {children ? (
        <label 
          htmlFor={htmlFor ? htmlFor : idGuid} 
          className={variantClasses}
        >
          {children}
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