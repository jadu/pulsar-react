import React from 'react';
import Help from '../elem/Help';
import Label from '../elem/Label';

export default class Group extends React.Component {
  render() {
    let {className, ...props} = this.props;
    
    return (
      <div className={'form__group ' + (className || '')}>
        <Label label={this.props.label} />
        <div className="controls">
          {this.props.children}
          <Help help={this.props.help} />
        </div>
      </div>
    );
  }
}