import React from 'react';

export default class RadioButton extends React.Component {
  render() {
    let {
      helpGuid,
      helpText,
      id,
      idGuid,
      ...props
    } = this.props;

    return (
      <input 
        id={id ? id : idGuid} 
        className="form__control checkbox" 
        type="checkbox" 
        required={false} 
        aria-describedby={helpText && helpGuid} 
        {...props} 
      />
    );
  }
}