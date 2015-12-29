import React from 'react';
import { Modal } from 'react-bootstrap';
import createButton from 'shared/components/button';

import blackWoodUrl from 'static/black-wood-texture.jpg';
import whiteWoodUrl from 'static/white-wood-texture.jpg';

const modalStyle = {
  background: `url(${whiteWoodUrl})`,
  borderRadius: '5px'
},
  modalBodyStyle = {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 20
  },
  boxStyle = {
    border: 'solid 3px rgb(51, 51, 51)',
    borderRadius: 4,
    color: 'rgb(51, 51, 51)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    fontSize: 35,
    background: 'transparent'
  },
  loadStyle = {
    ...boxStyle,
    cursor: 'pointer'
  },
  loadStyleHovered = {
    ...loadStyle,
    background: `url(${blackWoodUrl}) top left`,
    color: 'white'
  },
  inputStyle = {
    ...boxStyle,
    textAlign: 'center'
  };

export default () => React.createClass({
  render () {
    const { showPanel, onClose, onLoad } = this.props,
      Button = createButton();
    return (
      <Modal show={showPanel} onHide={ () => onClose() } >
        <div style={modalStyle}>
          <Modal.Header closeButton>
            <h1>Load Your Algorithm.</h1>
          </Modal.Header>
          <Modal.Body style={modalBodyStyle}>
            <label>Create your <a href="http://codepen.io/">pen</a> and paste your codepen ID here.</label>
            <input type="url" ref="urlInput" style={inputStyle}/>
            <Button onClick={ () => onLoad(this.refs.urlInput.value) }
              style={loadStyle} styleHovered={loadStyleHovered}>
              Load
            </Button>
          </Modal.Body>
        </div>
      </Modal>
    );
  }
});
