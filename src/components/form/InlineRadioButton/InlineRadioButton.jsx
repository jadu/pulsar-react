import React from 'react';
import FormLabel from '../FormLabel/FormLabel';

export default class InlineRadioButton extends React.Component {

  static defaultProps = {
    className: 'form__control radio',
    type: 'radio',
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