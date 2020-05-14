import React from 'react';
import PropTypes from 'prop-types';

export default class DateInput extends React.Component {

  static defaultProps = {
    autoComplete: 'false',
    className: 'form__control',
    type: 'date',
    'data-datepicker': 'true',
    'data-format': 'default',
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