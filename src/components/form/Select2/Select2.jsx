import React from 'react';
import classnames from 'classnames';

export default class Select2 extends React.Component {

  static defaultProps = {
    className: 'form__control select js-select2'
  };

  render() {
    let {
      ariaDescribedby,
      className,
      emptyOption,
      id,
      idGuid,
      loadingText,
      options,
      width,
      ...props
    } = this.props;

    let inputClassName = classnames(className, {
      [`form__control-col--${width}`]: width
    });

    if (!options) {
      return (
        <select className={inputClassName} disabled {...props}>
          <option>{loadingText || 'Loading...'}</option>
        </select>
      )
    }

    return (
      <select
        className={inputClassName}
        id={id ? id : idGuid} 
        aria-describedby={ariaDescribedby}
        {...props} 
      >
        {emptyOption ? <option value="">{emptyOption}</option> : null}
        {
          options.map(function(option, i) {
            let {text, ...props} = option;
            props.key = i;

            return <option {...props}>{text}</option>
          })
        }
      </select>
    );
  }
}