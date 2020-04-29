import React from 'react';

export default class TextInput extends React.Component {
  render() {
    let {
      helpGuid,
      helpText,
      id,
      ...props
    } = this.props;

    return (
      <input 
        id={id} 
        className="form__control" 
        type="text" 
        aria-describedby={helpText && helpGuid} 
        {...props} 
      />
    );
  }
}