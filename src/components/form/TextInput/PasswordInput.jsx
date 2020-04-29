import React from 'react';

export default class PasswordInput extends React.Component {
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
        className="form__control" 
        type="password" 
        aria-describedby={helpText && helpGuid} 
        {...props} 
      />
    );
  }
}