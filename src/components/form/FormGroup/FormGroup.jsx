import React from 'react';
import classnames from 'classnames';

export default class FormGroup extends React.Component {
  render() {
    let {
      children,
      className,
      ...props} = this.props;
      
    let formGroupClasses = classnames('form__group', className);

    return (
      <div className={formGroupClasses}>
          {children}
      </div>
    );
  }
}