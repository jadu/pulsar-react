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
      disabled,
      className,
      id,
      idGuid,
      labelText,
      nodeRef,
      ...props
    } = this.props;

    if (disabled) {
      className += ' is-disabled';
    }

    return (
      <span className="controls">
        <input disabled={disabled} id={id ? id : idGuid} ref={nodeRef} className={className} {...props} />
        <span className="toggle-switch-label"></span>
      </span>
    );
  }
}
