import React from 'react';
import classnames from 'classnames';

export default class Fieldset extends React.Component {
  render() {
    let {
      children,
      legendClassName,
      legendText,
      ...props} = this.props;

    return (
      <fieldset {...props}>
          <legend className={legendClassName}>{legendText}</legend>
          {children}
      </fieldset>
    );
  }
}