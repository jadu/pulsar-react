import React from 'react';

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
      nodeRef,
      ...props
    } = this.props;

    return (
      <span className="controls">
        <input id={id ? id : idGuid} ref={nodeRef} {...props} />
        <span className="toggle-switch-label"></span>
      </span>
    );
  }
}