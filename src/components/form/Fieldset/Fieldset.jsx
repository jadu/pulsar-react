import React from 'react';
import classnames from 'classnames';

export default class Fieldset extends React.Component {
  render() {
    let {
      children,
      legendText,
      ...props} = this.props;

    return (
      <fieldset>
          <legend>{legendText}</legend>
          {children}
      </fieldset>
    );
  }
}