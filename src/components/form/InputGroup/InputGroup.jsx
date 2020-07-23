import React from 'react';

export default class InputGroup extends React.Component {

  static defaultProps = {
    className: 'input-group has-btn-appended'
  };

  render() {
    let {
      className,
      children,
      ...props
    } = this.props;

    return (
      <div {...props.className}>
        {
          children.map(function(child, i) {
            if (child.props.tag === 'button') {
              return <span key={i} className="input-group-btn">{child}</span>
            }
            return child
          })
        }
      </div>
    );
  }
}