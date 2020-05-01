import React from 'react';

export default class CheckboxInput extends React.Component {

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
      ...props
    } = this.props;

    return (
      <input 
        id={id ? id : idGuid} 
        aria-describedby={ariaDescribedby}
        {...props} 
      />
    );
  }
}