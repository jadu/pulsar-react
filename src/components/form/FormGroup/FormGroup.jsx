import React from 'react';
import classnames from 'classnames';
import shortid from 'shortid';

import FormLabel from '../FormLabel/FormLabel';
import ErrorBlock from '../ErrorBlock/ErrorBlock';
import HelpBlock from '../HelpBlock/HelpBlock';

export default class FormGroup extends React.Component {

  componentWillMount() {
    let guid = shortid.generate();

    // GUID to use if no explicit ID has been set
    this.idGuid = 'id-guid-' + guid;

    // GUID to use to link the input with any help text 
    this.helpGuid = 'help-guid-' + guid;

    // GUID to use to link the input with any errors
    this.errorGuid = this.props.error && 'error-guid-' + guid;
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

    let ariaDescribedby = classnames({
      [`${this.errorGuid}`]: error,
      [`${this.helpGuid}`]: this.props.helpText
    });

    // If help text is present, pass the GUIDs to the child inputs so they can 
    // use it as aria-describedby
    let childrenWithGuids = React.cloneElement(children, {
      ariaDescribedby: ariaDescribedby ? ariaDescribedby : null,
      idGuid: this.idGuid
    });

    return (
      <div className={variantClasses}>
        <FormLabel idGuid={this.idGuid} {...props} />
        <div className="controls">
          {childrenWithGuids}
          <ErrorBlock errorGuid={this.errorGuid}>
            {error}
          </ErrorBlock>
          <HelpBlock helpGuid={this.helpGuid} {...props} />
        </div>
      </div>
    );
  }
} 