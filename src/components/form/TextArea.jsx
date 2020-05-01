import React from 'react';

export default class TextArea extends React.Component {

  static defaultProps = {
    className: 'form__control textarea',
    rows: 2
  };

  render() {
    let {
      ariaDescribedby,
      children,
      id,
      idGuid,
      ...props
    } = this.props;

    return (
      <textarea 
        id={id ? id : idGuid} 
        aria-describedby={ariaDescribedby} 
        {...props} 
      >
        {children}
      </textarea>
    );
  }
}