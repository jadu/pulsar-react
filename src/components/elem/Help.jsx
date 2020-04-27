import React from 'react';

export default class Help extends React.Component {
  render() {
    return (
      <>
      {this.props.help && (
        <span className="help-block">
          {this.props.help}
        </span>
      )}
      </>
    );
  }
}