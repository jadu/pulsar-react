import React from 'react';

export default class ModalHeader extends React.Component {

  static defaultProps = {
    className: 'modal__header'
  };

  render() {
    let {
      className,
      title,
      ...props
    } = this.props;

  	return <div className={className} {...props}>
      <Button className="close" data-dismiss="modal" aria-hidden="true">&times;</Button>
      <h2 className="modal__title">{title}</h2></div>
    </div>;
  }
}
