import React from 'react';
import classnames from 'classnames';
import shortid from 'shortid';

import Fieldset from '../Fieldset/Fieldset';
import FormLabel from '../FormLabel/FormLabel';
import ErrorBlock from '../ErrorBlock/ErrorBlock';
import HelpBlock from '../HelpBlock/HelpBlock';

export default class FormGroup extends React.Component {

  static defaultProps = {
    className: 'form__group',
    required: false
  };

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
      controls,
      error,
      flushLabel,
      helpText,
      hideLabel,
      indented,
      inline,
      inlineCheckbox,
      inlineRadioButton,
      labelText,
      prependText,
      required,
      radioButton,
      rangeInput,
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
      'form__group--compound': inline,
      'form__group--indent': indented,
      'form__group--toggle': toggle,
      'form__group--top': topLabel,
      'form__group--flush': flushLabel,
      'form-checkbox': checkbox,
      'form-checkbox-inline': inlineCheckbox,
      'form-radio-inline': inlineRadioButton,
      'form-radio': radioButton,
      'form-range': rangeInput,
      'has-changed': changed,
      'has-success': success,
      'has-warning': warning,
      'has-error': error
    });

    let guid = this.props.guid || shortid.generate();

    // GUID to use if no explicit ID has been set
    let idGuid = 'id-guid-' + guid;
    
    // GUID to use to link the input with any help text 
    let helpGuid = 'help-guid-' + guid;
    
    // GUID to use to link the input with any errors 
    let errorGuid = 'error-guid-' + guid;

    // Build list of IDs for the input based on the presence of help/error text 
    let ariaDescribedby = classnames({
      [`${errorGuid}`]: error,
      [`${helpGuid}`]: this.props.helpText
    });

    // If help/errors are present pass the GUIDs to the child inputs
    let childrenWithGuids = React.Children.map(
      children,
      (child, i) => {
        if (['div', 'p'].indexOf(child.type) !== -1) {
          return child;
        }

        return React.cloneElement(child, {
          ariaDescribedby: ariaDescribedby ? ariaDescribedby : null,
          id: idGuid
        });
      }
    );

    // Build list of classNames to be used on the controls block
    let controlsClassName = classnames('controls', {
      'btn__group': buttonGroup
    });

    // Form controls
    let inputBlock = (
      <React.Fragment>{childrenWithGuids}</React.Fragment>
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
        {labelText &&
        <FormLabel 
          required={required} 
          idGuid={idGuid}
          tag={controls ? 'span' : 'label'}
          hideLabel={hideLabel}
        >
          {labelText}
        </FormLabel>
        }

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
      <React.Fragment>{groupBlock}</React.Fragment>
    );
  }
}