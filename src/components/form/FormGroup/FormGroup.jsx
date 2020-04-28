import React from 'react';
import classnames from 'classnames';

export default class FormGroup extends React.Component {
  render() {
    let {
      checkbox,
      children,
      className,
      radio,
      ...props} = this.props;

    let formGroupClasses = classnames('form__group', className, {
      'form-checkbox': checkbox,
      'form-radio': radio
    });

    return (
      <div className={formGroupClasses}>
          {children}
      </div>
    );
  }
}