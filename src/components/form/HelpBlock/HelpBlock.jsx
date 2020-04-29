import React from 'react';

export default class HelpBlock extends React.Component {
  render() {
    let {
      helpGuid,
      helpText, 
      ...props} = this.props;

    return (
      <>
      {helpText && (
        <span id={helpGuid} className="help-block">{helpText}</span>
      )}
      </>
    );
  }
}