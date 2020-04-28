import React from 'react';
import shortid from 'shortid';
import FormLabel from '../FormLabel/FormLabel';

export default class TextInput extends React.Component {

  componentWillMount() {
    this.idGuid = 'id-guid-' + shortid.generate();
    this.helpGuid = 'help-guid-' + shortid.generate();
  }

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
      <span id={this.helpGuid} className={helpClasses}>{helpText}</span>
    ) : null;

    let ariaDescribedby = helpText ? this.helpGuid : null;

    return (
      <>
      <FormLabel htmlFor={id || this.idGuid} labelText={labelText} required={props.required} hideLabel={hideLabel} />
      <div className="controls">
        <input id={id || this.idGuid} aria-describedby={ariaDescribedby} className="form__control" type="text" {...props} />
        {helpBlock}
      </div>
      </>
    );
  }
}