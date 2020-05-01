import React from 'react';

export default class TimeInput extends React.Component {

  static defaultProps = {
    className: 'form__control',
    type: 'time'
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