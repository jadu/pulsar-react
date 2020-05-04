import React, { Children } from 'react';

export default class Form extends React.Component {

  static defaultProps = {
    className: 'form',
    encType: 'application/x-www-form-urlencoded',
    method: 'POST'
  };

  render() {
    let {
      children,
      method,
      nonce,
      ...props
    } = this.props;

    return (
      <form {...props}>
        {method == 'PUT' &&
          <input name="_method" value="PUT" type="hidden" />
        }
        {nonce &&
          <input name="nonce" value={nonce} type="hidden" />
        }
        {children}
      </form>
    );
  }
}