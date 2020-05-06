import React from 'react';
import classnames from 'classnames';
import shortid from 'shortid';

import Fieldset from './Fieldset';
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
    if (!this.props.children) {
      return null;
    }

    let {
      appendText,
      buttonGroup,
      changed,
      checkbox,
      children,
      choiceGroup,
      className,
      error,
      flushLabel,
      helpText,
      indented,
      inlineCheckbox,
      inlineRadioButton,
      labelText,
      prependText,
      required,
      radio,
      success,
      toggle,
      topLabel,
      warning,
      width,
      ...props} = this.props;

    // Convert variants to their required classes
    let variantClasses = classnames(className, {
      [`form__control-col--${width}`]: width,
      'form__button-group': buttonGroup,
      'form-choice': choiceGroup,
      'form__group--indent': indented,
      'form__group--toggle': toggle,
      'form__group--top': topLabel,
      'form__group--flush': flushLabel,
      'form-checkbox': checkbox,
      'form-checkbox-inline': inlineCheckbox,
      'form-radio-inline': inlineRadioButton,
      'form-radio': radio,
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

    // Build list of classNames to be used on the controls block
    let controlsClassName = classnames('controls', {
      'btn__group': buttonGroup
    });

    // Form controls
    let inputBlock = (
      <>{childrenWithGuids}</>
    );

    // Wrap with input group if appended/prepended text is present
    if (appendText || prependText) {
      inputBlock = (
        <div className="input-group">
          {prependText && 
            <span className="input-group-addon">{prependText}</span>
          }
          {childrenWithGuids}
          {appendText && 
            <span className="input-group-addon">{appendText}</span>
          }
        </div>
      );
    }

    // Wrap input block alongside errors and help
    let controlsBlock = (
      <div className={controlsClassName}>
        {inputBlock}
        <ErrorBlock errorGuid={errorGuid}>
          {error}
        </ErrorBlock> 
        <HelpBlock helpGuid={helpGuid}>
          {helpText}
        </HelpBlock>
      </div>
    );

    // Standard group markup strategy for most components
    let groupBlock = (
      <div className={variantClasses}>
        <FormLabel 
          required={required} 
          idGuid={idGuid}
        >
          {labelText}
        </FormLabel>
        {controlsBlock}
      </div>
    );

    // Switch markup strategies for certain non-standard components
    if (choiceGroup) {
      groupBlock = (
        <Fieldset 
          className={variantClasses}
          legendText={labelText}
          legendClassName="control__label"
        >
          {controlsBlock}
        </Fieldset>
      );
    }
    else if (toggle) {
      groupBlock = (
        <div className={variantClasses}>
          <FormLabel 
            className="toggle-switch-wrapper-label" 
            required={required} 
            idGuid={idGuid}
          >
            <span className="control__label">
              {labelText}
            </span>
            {controlsBlock}
          </FormLabel>
        </div>
      );
    } 
    else if (inlineCheckbox || inlineRadioButton) {
      groupBlock = (
        <div className={variantClasses}>
          {controlsBlock}
          {labelText}
        </div>
      );
    }

    return (
      <>{groupBlock}</>
    );
  }
}