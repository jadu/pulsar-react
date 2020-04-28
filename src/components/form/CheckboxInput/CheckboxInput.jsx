import React from 'react';
import FormLabel from '../FormLabel/FormLabel';

export default class CheckboxInput extends React.Component {
  render() {
    let {
      helpText,
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
      <FormLabel id={id} labelText={labelText} required={props.required} />
      <div className="controls">
        <input className="form__control checkbox" type="checkbox" required={false} {...props} />
        {helpBlock}
      </div>
      </>
    );
  }
}