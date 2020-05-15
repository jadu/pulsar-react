import React from 'react';

export default class ErrorSummary extends React.Component {

  static defaultProps = {
    title: 'There is a problem'
  };

  render() {
    let {
      title,
      ...props
    } = this.props;

    return (
      <section 
        aria-labelledby="error-summary-title" 
        data-error-summary="true" 
        tabIndex="-1"
        className="error-summary"
        {...props}
      >
        <h2 
          className="error-summary__title" 
          id="error-summary-title"
        >
          {title}
        </h2>
        <ul className="error-summary__list">
          <li className="error-summary__list-item">
            <a className="error-summary__list-link" href="#first-name">Enter your first name</a>
          </li>
          <li className="error-summary__list-item">
            <a className="error-summary__list-link" href="#last-name">Enter your last name</a>
          </li>
        </ul>
      </section>
    );
  }
}