import { Modal, Button } from 'react-bootstrap';

export default React => {
  return React.createClass({
    render () {
      const { showPanel, onClose, onLoad } = this.props;
      return (
        <Modal show={showPanel} onHide={ () => onClose() }>
          <Modal.Header closeButton>
            <h1>Load Your Algorithm.</h1>
          </Modal.Header>
          <Modal.Body>
            <label>Create your <a href="">codepen</a> and paste your url here.</label>
            <input type="url" ref="urlInput"/>
            <Button onClick={ () => onLoad(this.refs.urlInput.value) }>
              Load
            </Button>
          </Modal.Body>
        </Modal>
      );
    }
  });
};
