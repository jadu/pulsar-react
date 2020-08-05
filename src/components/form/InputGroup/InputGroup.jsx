import React from 'react';

export default class InputGroup extends React.Component {

  render() {
    let {
      ariaDescribedby,
      children,
      id,
      ...props
    } = this.props;

    let childrenWithGuids = React.Children.map(
      children,
      (child, i) => {
        if (child && child.props.className.indexOf('form__control') !== -1) {
          return React.cloneElement(child, {
            ariaDescribedby: ariaDescribedby,
            id: id
          });
        }
        return child;
      }
    );

    return (
      <div className="input-group has-btn-appended">
        {
          childrenWithGuids.map(function(child, i) {
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