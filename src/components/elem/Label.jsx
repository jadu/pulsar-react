import React from 'react';

export default class Label extends React.Component {
  render() {
    return (
      <>
      {this.props.label 
        ? (
          <label className="control__label">
            {this.props.label}
          </label>
        )
        : (
          <span className="control__label"></span>
        )
      }
      </>
    );
  }
}