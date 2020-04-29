import React from 'react';
import FormLabel from '../FormLabel/FormLabel';

export default class CheckboxInput extends React.Component {
  render() {
    let {
      helpText,
      hideLabel,
      id,
      labelText,
      required,
      ...props
    } = this.props;

    let ariaDescribedby = helpText ? this.helpGuid : null;

    let helpClasses = 'help-block';

    let helpBlock = helpText ? (
      <span className={helpClasses}>{helpText}</span>
    ) : null;

    return (
      <>
        <FormLabel 
          id={id} 
          labelText={labelText} 
          required={props.required} 
        />

          <div className="controls">

            <input 
              id={id || this.idGuid} 
              className="form__control checkbox" 
              type="checkbox" 
              aria-describedby={ariaDescribedby} 
              required={false} // don't allow required attribute to be set
              {...props} 
            />

            {helpBlock}

        </div>

      </>
    );
  }
}