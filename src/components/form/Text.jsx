import React from 'react';
import Group from './Group';

export default class Text extends React.Component {
  render() {
    return (
      <Group 
        label={this.props.label} 
        help={this.props.help}
      >
        <input className="form__control" type="text" />
      </Group>
    );
  }
}