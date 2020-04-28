import React from 'react';

export default class FormLabel extends React.Component {
  render() {
    let {
      id,
      labelText, 
      required,
      ...props} = this.props;

    let requiredIndicator = required && (
      <span aria-hidden="true" className="required-indicator" data-tippy-content="required">*</span>
    );

    return (
      <>
      {labelText 
        ? (
          <label htmlFor={id} className="control__label" {...props}>
            {labelText}
            {requiredIndicator}
          </label>
        )
        : (
          <span className="control__label"></span>
        )
      }
      </>
    );
  }
}