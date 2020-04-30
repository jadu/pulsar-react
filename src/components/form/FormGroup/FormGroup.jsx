import React from 'react';
import classnames from 'classnames';
import shortid from 'shortid';

import FormLabel from '../FormLabel/FormLabel';
import ErrorBlock from '../ErrorBlock/ErrorBlock';
import HelpBlock from '../HelpBlock/HelpBlock';

export default class FormGroup extends React.Component {

  componentWillMount() {
    this.guid = shortid.generate();
  }

  render() {
    let {
      checkbox,
      children,
      className,
      error,
      flushLabel,
      radio,
      topLabel,
      width,
      ...props} = this.props;

    // Convert variants to their required classes
    let variantClasses = classnames('form__group', className, {
      [`form__control-col--${width}`]: width,
      'form-checkbox': checkbox,
      'form-radio': radio,
      'form__group--top': topLabel,
      'form__group--flush': flushLabel,
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
        <FormLabel idGuid={idGuid} {...props} />
        <div className="controls">
          {childrenWithGuids}
          <ErrorBlock errorGuid={errorGuid}>
            {error}
          </ErrorBlock>
          <HelpBlock helpGuid={helpGuid} {...props} />
        </div>
      </div>
    );
  }
} 