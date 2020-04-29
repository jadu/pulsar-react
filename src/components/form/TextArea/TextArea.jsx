import React from 'react';
import shortid from 'shortid';
import FormLabel from '../FormLabel/FormLabel';

export default class TextArea extends React.Component {

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
      rows,
      ...props
    } = this.props;

    let ariaDescribedby = helpText ? this.helpGuid : null;

    let helpClasses = 'help-block';

    let helpBlock = helpText ? (
      <span id={this.helpGuid} className={helpClasses}>{helpText}</span>
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

          <textarea
            id={id || this.idGuid} 
            className="form__control textarea" 
            type="text" 
            aria-describedby={ariaDescribedby} 
            rows={rows || 2 }
            {...props} 
            />

          {helpBlock}

        </div>

      </>
    );
  }
}