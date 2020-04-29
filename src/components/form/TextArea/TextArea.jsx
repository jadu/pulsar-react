import React from 'react';

export default class TextArea extends React.Component {
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
        className="form__control textarea" 
        rows={rows || 2 }
        aria-describedby={helpText && helpGuid} 
        {...props} 
      />
    );
  }
}