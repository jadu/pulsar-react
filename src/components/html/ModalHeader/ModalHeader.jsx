import React from 'react';
import Button from '../Button/Button';

export default class ModalHeader extends React.Component {

  static defaultProps = {
    className: 'modal__header'
  };

  render() {
    let {
      className,
      onCloseModal,
      title,
      ...props
    } = this.props;

  	return <div className={className} {...props}>
      <Button className="close" data-dismiss="modal" aria-hidden="true" onClick={onCloseModal}>&times;</Button>
      <h2 className="modal__title">{title}</h2>
    </div>;
  }
}
