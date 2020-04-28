import React from 'react';
import classnames from 'classnames';

export default class FormGroup extends React.Component {
  render() {
    let {
      checkbox,
      children,
      className,
      flushLabel,
      radio,
      topLabel,
      ...props} = this.props;

    let formGroupClasses = classnames('form__group', className, {
      'form-checkbox': checkbox,
      'form-radio': radio,
      'form__group--top': topLabel,
      'form__group--flush': flushLabel  
    });

    return (
      <div className={formGroupClasses}>
          {children}
      </div>
    );
  }
}