import React from 'react';
import FormLabel from './FormLabel';

export default class InlineRadioButton extends React.Component {
  render() {
    let {
      ariaDescribedby,
      labelText,
      id,
      idGuid,
      ...props
    } = this.props;

    return (
      <FormLabel idGuid={idGuid}>
        <input 
          id={id ? id : idGuid} 
          className="form__control radio" 
          type="radio" 
          required={false} 
          aria-describedby={ariaDescribedby}
          {...props} 
        />
        {labelText}
      </FormLabel>
    );
  }
}