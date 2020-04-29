import React from 'react';

export default class ErrorBlock extends React.Component {
  render() {
    let {
      errorText, 
      ...props} = this.props;

    return (
      <>
      {errorText 
        && (
          <span className="help-block is-error">
            <i aria-hidden="true" className="icon-warning-sign"></i>
            {errorText}
          </span>
        )
      }
      </>
    );
  }
}