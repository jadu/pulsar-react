import React from 'react';

export default class FileInput extends React.Component {

  static defaultProps = {
    className: 'form__control file',
    type: 'file'
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