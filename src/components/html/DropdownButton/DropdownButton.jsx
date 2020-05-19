import React from 'react';
import classnames from 'classnames';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Button from '../Button/Button';

export default class DropdownButton extends React.Component {

  static defaultProps = {
    'aria-expanded': 'false',
    items: [],
    label: 'Label'
  };

  render() {
    let {
      children,
      className,
      danger,
      info,
      inverse,
      items,
      label,
      naked,
      outline,
      primary,
      success,
      warning,
      white,
      ...props
    } = this.props;

    let variantClasses = classnames(className, 'btn dropdown__toggle', {
      'btn--danger': danger,
      'btn--info': info,
      'btn--inverse': inverse,
      'btn--naked': naked,
      'btn--outline': outline,
      'btn--primary': primary,
      'btn--success': success,
      'btn--warning': warning,
      'btn--white': white
    });

    return (
      <ButtonGroup className="dropdown">
        <Button
          className={variantClasses}
          {...props}
        >
          {label} <span className="caret"></span>
        </Button>
        <ul className="dropdown__menu pull-left">
          {
            items.map(function(item, i) {
              let {label, ...props} = item;
              props.key = i;

              return <li {...props}>{label}</li>
            })
          }
        </ul>
      </ButtonGroup>
    );
  }
}


// <div  class="btn__group dropdown">
//   <button aria-haspopup="true" aria-expanded="false" aria-controls="guid-1195386946" data-toggle="dropdown"  class="btn dropdown__toggle">
//     My Action&nbsp;<span class="caret"></span>
//   </button>
//   <ul id="guid-1195386946"  class="dropdown__menu pull-left">
//     <li><a href="#foo">Foo</a></li>
//     <li><a href="#bar">Bar</a></li>
//   </ul>
// </div>