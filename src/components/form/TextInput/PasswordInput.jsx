import React from 'react';
import FormLabel from '../FormLabel/FormLabel';

export default class PasswordInput extends React.Component {
  render() {
    let {
      helpText,
      hideLabel,
      id,
      labelText,
      ...props
    } = this.props;

    let helpClasses = 'help-block';

    let helpBlock = helpText ? (
      <span className={helpClasses}>{helpText}</span>
    ) : null;

    return (
      <>
      <FormLabel id={id} labelText={labelText} required={props.required} hideLabel={hideLabel} />
      <div className="controls">
        <input className="form__control" type="password" {...props} />
        {helpBlock}
      </div>
      </>
    );
  }
}