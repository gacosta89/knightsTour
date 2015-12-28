import React from 'react';
import { mapX, mapY } from 'shared/util/coords';
import createMessage from 'shared/components/message';

const controlBarStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: 330,
  height: 700,
  padding: 15
},
  controlsStyle = {
    display: 'flex',
    height: 60
  },
  controlItemStyle = {
    border: 'solid 3px grey',
    borderRadius: 4,
    color: 'grey',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 5,
    cursor: 'pointer'
  },
  restartItemStyle = {
    ...controlItemStyle,
    flex: 2
  },
  loadSolutionStyle = {
    border: 'solid 3px grey',
    borderRadius: 4,
    color: 'grey',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    cursor: 'pointer',
    height: 50,
    fontSize: 35
  },
  iconStyle = {
    fontSize: 35
  },
  stateStyle = {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column'
  },
  spanStyle = {
    color: 'white',
    fontSize: 35,
    padding: 5
  },
  initialPositionStyle = {
    display: 'flex',
    alignItems: 'flex-end',
    height: 60
  },
  initialPositionInputStyle = {
    border: 'solid 3px grey',
    borderRadius: 4,
    color: 'white',
    fontSize: 30,
    flex: 1,
    margin: 5,
    background: 'transparent',
    textAlign: 'center'
  };

export default React.createClass({
    render () {
      const { steps, immobulus, error, x, y, infoMessage,
        onUndo, onRedo, onLoad, onReset
      } = this.props;
      const successMessage = immobulus && steps === 64 ? 'The knight tour is complete' : '',
        errorMessage = typeof error !== 'undefined' ? error : immobulus ?
          steps < 64 ? 'You are frozen!!' : '' : '',
        Message = createMessage(React);

      return (
        <div style={controlBarStyle}>
          <div style={controlsStyle}>
            <div onClick={onUndo} style={controlItemStyle}>
              <i className="material-icons" style={iconStyle}>undo</i>
            </div>
            <div onClick={onRedo} style={controlItemStyle}>
              <i className="material-icons" style={iconStyle}>redo</i>
            </div>
            <div onClick={() => onReset(this.refs.inix.value, this.refs.iniy.value)} style={restartItemStyle}>
              <i className="material-icons" style={iconStyle}>cached</i>
            </div>
          </div>
          <div style={initialPositionStyle}>
            <span style={{...spanStyle, flex: 2, padding: 0, margin: 5}}> Ini. pos.:</span>
            <input type="text" ref="inix" style={initialPositionInputStyle}/>
            <input type="text" ref="iniy" style={initialPositionInputStyle}/>
          </div>
          <div style={stateStyle}>
            <span style={spanStyle}>Visited spots: <span style={{color: 'grey'}}>{steps}</span></span>
            <span style={spanStyle}>Current Position: <span style={{color: 'grey'}}>{mapX[x].toUpperCase()}{mapY[y]}</span></span>
          </div>
          <div style={loadSolutionStyle} onClick={onLoad}>
            Load Solution
          </div>
          <Message type={errorMessage.length > 0 ? 'error' : 'hidden'}>{errorMessage}</Message>
          <Message type={successMessage.length > 0 ? 'success' : 'hidden'}>{successMessage}</Message>
          <Message type={infoMessage.length > 0 ? 'info' : 'hidden'}>{infoMessage}</Message>
        </div>
      );
    }
  });
