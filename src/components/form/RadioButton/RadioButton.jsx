import React from 'react';
import FormLabel from '../FormLabel/FormLabel';

export default class RadioButton extends React.Component {
  render() {
    let {
      helpText,
      hideLabel,
      id,
      labelText,
      required,
      ...props
    } = this.props;

    let helpClasses = 'help-block';

    let helpBlock = helpText ? (
      <span className={helpClasses}>{helpText}</span>
    ) : null;

    return (
      <>

        <FormLabel 
          hideLabel={hideLabel} 
          htmlFor={id || this.idGuid} 
          labelText={labelText} 
          required={props.required} 
          />

        <div className="controls">

          <input 
            className="form__control radio" 
            required={false} 
            type="radio" 
            {...props} 
            />

          {helpBlock}

        </div>

      </>
    );
  }
}