import React from 'react';

export default class InputGroup extends React.Component {

  render() {
    let {
      children,
      ...props
    } = this.props;

    return (
      <div className="input-group has-btn-appended">
        {
          children.map(function(child, i) {
            if (child && child.props.tag === 'button') {
              return <span key={i} className="input-group-btn">{child}</span>
            }
            return child
          })
        }
      </div>
    );
  }
}