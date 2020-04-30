import React from 'react';

export default class FiletInput extends React.Component {
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
        className="form__control file" 
        type="file" 
        aria-describedby={ariaDescribedby}
        {...props} 
      />
    );
  }
}