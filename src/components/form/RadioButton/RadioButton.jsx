import React from 'react';

export default class RadioButton extends React.Component {

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