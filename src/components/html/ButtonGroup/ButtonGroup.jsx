import React from 'react';

export default class ButtonGroup extends React.Component {

  static defaultProps = {
    className: 'btn__group'
  };

  render() {
    let {
      children,
      ...props
    } = this.props;

    return (
      <React.Fragment>
        <div
          {...props}
        >
          {children}
        </div>
      </React.Fragment>
    );
  }
}
