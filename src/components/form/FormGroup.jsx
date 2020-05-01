import React from 'react';
import classnames from 'classnames';
import shortid from 'shortid';

import FormLabel from './FormLabel';
import ErrorBlock from './ErrorBlock';
import HelpBlock from './HelpBlock';

export default class FormGroup extends React.Component {

  static defaultProps = {
    className: 'form__group',
    required: false
  };

  componentWillMount() {
    this.guid = shortid.generate();
  }

  render() {
    let {
      changed,
      checkbox,
      children,
      className,
      error,
      flushLabel,
      helpText,
      indented,
      inlineCheckbox,
      inlineRadioButton,
      labelText,
      required,
      radio,
      success,
      topLabel,
      warning,
      width,
      ...props} = this.props;

    // Convert variants to their required classes
    let variantClasses = classnames(className, {
      [`form__control-col--${width}`]: width,
      'form-checkbox': checkbox,
      'form-checkbox-inline': inlineCheckbox,
      'form-radio-inline': inlineRadioButton,
      'form__group--indent': indented,
      'form-radio': radio,
      'form__group--top': topLabel,
      'form__group--flush': flushLabel,
      'has-changed': changed,
      'has-success': success,
      'has-warning': warning,
      'has-error': error
    });

    // GUID to use if no explicit ID has been set
    let idGuid = 'id-guid-' + this.guid;

    // GUID to use to link the input with any help text 
    let helpGuid = 'help-guid-' + this.guid;

    // GUID to use to link the input with any errors 
    let errorGuid = 'error-guid-' + this.guid;

    // Build list of IDs for the input based on the presence of help/error text 
    let ariaDescribedby = classnames({
      [`${errorGuid}`]: error,
      [`${helpGuid}`]: this.props.helpText
    });

    // If help/errors are present pass the GUIDs to the child inputs
    let childrenWithGuids = React.cloneElement(children, {
      ariaDescribedby: ariaDescribedby ? ariaDescribedby : null,
      idGuid: idGuid
    });

    return (
      <div className={variantClasses}>
        <FormLabel required={required} idGuid={idGuid}>
          {labelText}
        </FormLabel>
        <div className="controls">
          {childrenWithGuids}
          <ErrorBlock errorGuid={errorGuid}>
            {error}
          </ErrorBlock>
          <HelpBlock helpGuid={helpGuid}>
            {helpText}
          </HelpBlock>
        </div>
      </div>
    );
  }
} 