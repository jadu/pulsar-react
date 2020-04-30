import React from 'react';

export default class TextArea extends React.Component {
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
        className="form__control textarea" 
        rows={rows || 2 }
        aria-describedby={ariaDescribedby}
        {...props} 
      />
    );
  }
}