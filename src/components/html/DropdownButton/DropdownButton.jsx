import React from 'react';
import classnames from 'classnames';
import shortid from 'shortid';

import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Button from '../Button/Button';

export default class DropdownButton extends React.Component {

  static defaultProps = {
    'aria-expanded': 'false',
    'data-toggle': 'dropdown',
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

    let guid = this.props.guid || shortid.generate();

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
          aria-controls={guid}
          className={variantClasses}
          {...props}
        >
          {label} <span className="caret"></span>
        </Button>
        <ul id={guid} className="dropdown__menu pull-left">
          {
            React.Children.map(children, (item, i) => {
              return <li key={i}>{item}</li>
            })
          }
        </ul>
      </ButtonGroup>
    );
  }
}
