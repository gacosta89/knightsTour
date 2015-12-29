import React from 'react';
import { mapX, mapY } from 'shared/util/coords';
import createMessage from 'shared/components/message';
import Button from 'shared/components/button';

import greyWoodUrl from 'static/grey-wood-texture.jpg';

//styles
const controlBarStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: 330,
  height: 700,
  padding: 15
},
  boxStyle = {
    border: 'solid 3px grey',
    color: 'grey',
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    fontSize: 35,
    background: 'transparent'
  },
  boxStyleHovered = {
    background: `url(${greyWoodUrl})`,
    border: 'solid 3px transparent',
    color: 'rgb(51, 51, 51)'
  },
  controlsStyle = {
    display: 'flex',
    height: 60
  },
  controlItemStyle = {
    ...boxStyle,
    cursor: 'pointer',
    flex: 1
  },
  restartItemStyle = {
    ...controlItemStyle,
    flex: 2
  },
  loadSolutionStyle = {
    ...boxStyle
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
    marginTop: 5,
  },
  initialPositionInputStyle = {
    ...boxStyle,
    flex: 1,
    textAlign: 'center',
    color: 'white',
    height: 50
  };

export default React.createClass({
    render () {
      const { steps, immobulus, error, x, y, infoMessage,
        onUndo, onRedo, onLoad, onReset
      } = this.props;
      const successMessage = immobulus && steps === 64 ? 'The knight tour is complete' : '',
        errorMessage = error !== '' ? error : immobulus ?
          steps < 64 ? 'You are frozen!!' : '' : '',
        Message = createMessage(React);

      return (
        <div style={controlBarStyle}>
          <div style={controlsStyle}>
            <Button onClick={onUndo} style={controlItemStyle} styleHovered={{...controlItemStyle, ...boxStyleHovered}}>
              <i className="material-icons" style={iconStyle}>undo</i>
            </Button>
            <Button onClick={onRedo} style={controlItemStyle} styleHovered={{...controlItemStyle, ...boxStyleHovered}}>
              <i className="material-icons" style={iconStyle}>redo</i>
            </Button>
            <Button onClick={() => onReset(this.refs.inix.value, this.refs.iniy.value)} style={restartItemStyle} styleHovered={{...restartItemStyle, ...boxStyleHovered}}>
              <i className="material-icons" style={iconStyle}>cached</i>
            </Button>
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
          <Button onClick={onLoad} style={loadSolutionStyle} styleHovered={{...loadSolutionStyle, ...boxStyleHovered}}>
            Load Solution
          </Button>
          <Message type={errorMessage.length > 0 ? 'error' : 'hidden'}>{errorMessage}</Message>
          <Message type={successMessage.length > 0 ? 'success' : 'hidden'}>{successMessage}</Message>
          <Message type={infoMessage.length > 0 ? 'info' : 'hidden'}>{infoMessage}</Message>
        </div>
      );
    }
  });
