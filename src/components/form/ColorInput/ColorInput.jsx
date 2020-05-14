import React from 'react';

export default class ColorInput extends React.Component {

  static defaultProps = {
    className: 'form__control',
    type: 'color'
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