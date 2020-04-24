import React from 'react';

export default class Button extends React.Component {
  render() {
    let {className, ...props} = this.props;

    return <button className={'btn ' + (className || '')} {...props}>{this.props.children}</button>;
  }
}
