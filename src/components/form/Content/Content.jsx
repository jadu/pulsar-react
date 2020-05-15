import React from 'react';

export default class Content extends React.Component {

  render() {
    let {
      ariaDescribedby,
      children,
      idGuid,
      ...props
    } = this.props;

    return (
      <p
        {...props}
      >
        {children}
      </p>
    );
  }
}