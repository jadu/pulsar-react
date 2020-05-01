import React from 'react';

export default class Select extends React.Component {

  static defaultProps = {
    className: 'form__control select'
  };

  render() {
    let {
      ariaDescribedby,
      emptyOption,
      id,
      idGuid,
      loadingText,
      options,
      ...props
    } = this.props;

    if (!options) {
      return <select disabled {...props}>
          <option>{loadingText || 'Loading...'}</option>
      </select>;
    }

    return (
      <select
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