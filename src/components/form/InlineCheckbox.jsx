import React from 'react';
import FormLabel from './FormLabel';

export default class InlineCheckboxInput extends React.Component {

  static defaultProps = {
    className: 'form__control checkbox',
    type: 'checkbox',
    required: false
  };

  render() {
    let {
      ariaDescribedby,
      id,
      idGuid,
      labelText,
      ...props
    } = this.props;

    return (
      <FormLabel idGuid={idGuid}>
        <input 
          id={id ? id : idGuid} 
          aria-describedby={ariaDescribedby} 
          {...props} 
        />
        {labelText}
      </FormLabel>
    );
  }
}