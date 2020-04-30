import React from 'react';

export default class TextInput extends React.Component {
  render() {
    let {
      ariaDescribedby,
      id,
      idGuid,
      ...props
    } = this.props;

    return (
      <input 
        id={id ? id : idGuid} 
        className="form__control" 
        type="text" 
        aria-describedby={ariaDescribedby}
        {...props} 
      />
    );
  }
}