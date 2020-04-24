import React from 'react';

function HelpBlock (props) {
  return (
    <span className="help-block">
      {props.help}
    </span>
  );
}

export default class Group extends React.Component {
  render() {
    let {className, ...props} = this.props;
    
    return (
      <div className="form__group">
        <label className="control__label">
          {this.props.label}
        </label>
        {this.props.children}
        <HelpBlock help={this.props.help} />
      </div>
    );
  }
}