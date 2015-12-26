import { Modal, Button } from 'react-bootstrap';

export default React => {
  return React.createClass({
    onLoad () {
      this.props.onLoad(this.refs.urlInput.value);
    },
    onHide () {
      this.props.onClose();
    },
    render () {
      return (
        <Modal show={this.props.showPanel} onHide={this.onHide}>
          <Modal.Header closeButton>
            <h1>Load Your Algorithm.</h1>
          </Modal.Header>
          <Modal.Body>
            <label>Create your <a href="">codepen</a> and paste your url here.</label>
            <input type="url" ref="urlInput"/>
            <Button onClick={this.onLoad}>
              Load
            </Button>
          </Modal.Body>
        </Modal>
      );
    }
  });
};
