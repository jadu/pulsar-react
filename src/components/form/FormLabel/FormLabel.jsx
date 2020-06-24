import React from 'react';
import classnames from 'classnames';

export default class FormLabel extends React.Component {

  static defaultProps = {
    className: 'control__label',
    tag: 'label'
  };

  render() {
    let {
      children,
      className,
      hideLabel,
      htmlFor,
      idGuid,
      tag,
      required,
      ...props} = this.props;

    let LabelTag = tag;

    let variantClasses = classnames(className, {
      'hide': hideLabel
    });

    let requiredIndicator = required && (
      <span aria-hidden="true" className="required-indicator" data-tippy-content="required">*</span>
    );

    return (
      <React.Fragment>
      {children ? (
        <LabelTag
          htmlFor={htmlFor ? htmlFor : idGuid} 
          className={variantClasses}
          {...props}
        >
          {children}
          {requiredIndicator}
        </LabelTag>
      )
      : (
        <span className="control__label"></span>
      )}
      </React.Fragment>
    );
  }
}