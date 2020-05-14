import React, { Children } from 'react';

export default class FormActions extends React.Component {

  static defaultProps = {
    className: 'form__actions'
  };

  render() {
    let {
      children,
      ...props
    } = this.props;

    return (
      <div {...props}>
        {children}
      </div>
    );
  }
}