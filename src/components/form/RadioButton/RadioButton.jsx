import React from 'react';

export default class RadioButton extends React.Component {
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
        className="form__control radio" 
        type="radio" 
        required={false} 
        aria-describedby={ariaDescribedby}
        {...props} 
      />
    );
  }
}