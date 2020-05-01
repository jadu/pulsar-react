import React from 'react';
import FormLabel from './FormLabel';

export default class ToggleSwitch extends React.Component {

  static defaultProps = {
    className: 'form__control toggle-switch',
    type: 'checkbox',
    required: false
  };

  render() {
    let {
      ariaDescribedby,
      id,
      idGuid,
      labelText,
      ...props
    } = this.props;

    return (
      <span className="controls">
        <input id={idGuid} {...props} />
        <span className="toggle-switch-label"></span>
      </span>
    );
  }
}