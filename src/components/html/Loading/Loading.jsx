import React from 'react';
import classnames from 'classnames';

export default class Loading extends React.Component {

  static defaultProps = {
    className: 'loading'
  };

  render() {
    let {
      block,
      children,
      className,
      large,
      ...props
    } = this.props;
    
    let variantClasses = classnames(className, {
      'loading--large': large
    });

    let spinner = (
      <span className={variantClasses} {...props}>
        <i>Loading...</i>
      </span>
    );

    let loadingBlock = block ? (
      <div className="loading-block">
        {spinner}
        {children &&
          <span className="loading-block__message">{children}</span>
        }
      </div>
    ) : spinner;

    return (
      <>{loadingBlock}</>
    );
  }
}