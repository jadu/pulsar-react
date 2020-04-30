import React from 'react';

export default class CheckboxInput extends React.Component {
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
        className="form__control checkbox" 
        type="checkbox" 
        required={false} 
        aria-describedby={ariaDescribedby}
        {...props} 
      />
    );
  }
}