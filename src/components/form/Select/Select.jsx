import React from 'react';
import classnames from 'classnames';

export default class Select extends React.Component {

  static defaultProps = {
    className: 'form__control select',
    emptyOption: 'Choose...'
  };

  render() {
    let {
      ariaDescribedby,
      className,
      emptyOption,
      id,
      idGuid,
      loadingText,
      nodeRef,
      options,
      width,
      ...props
    } = this.props;

    let inputClassName = classnames(className, {
      [`form__control-col--${width}`]: width
    });

    if (!options) {
      return (
        <select 
          disabled 
          className={inputClassName}
          ref={nodeRef}
          {...props}
        >
          <option>{loadingText || 'Loading...'}</option>
        </select>
      )
    }

    return (
      <select
        className={inputClassName}
        id={id ? id : idGuid} 
        aria-describedby={ariaDescribedby}
        ref={nodeRef}
        {...props} 
      >
        {emptyOption ? <option value="">{emptyOption}</option> : null}
        {
          options.map(function(option, i) {
            if (option.options) {
              return <optgroup key={i} label={option.label}>
                {option.options.map(function(optGroupOption, j) {
                  let {text, ...props} = optGroupOption;
                  props.key = j;

                  return <option {...props}>{text}</option>
                })}
              </optgroup>;
            }

            let {text, ...props} = option;
            props.key = i;

            return <option {...props}>{text}</option>
          })
        }
      </select>
    );
  }
}