import { mapX, mapY } from 'shared/util/coords';

const controlBarStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: 300,
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
  iconStyle = {
    fontSize: 35
  },
  stateStyle = {
    color: 'white',
    fontSize: 35,
    marginTop: 10,
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  spanStyle = {
    padding: 5
  },
  messageStyle = {
    color: 'red',
    fontSize: 35,
    display: 'flex',
    borderRadius: 4
  };

export default React => ({steps, immobulus, x, y, error, onUndo, onRedo, onReset}) => {
  return (
    <div style={controlBarStyle}>
      <div style={controlsStyle}>
        <div onClick={onUndo} style={controlItemStyle}>
          <i className="material-icons" style={iconStyle}>undo</i>
        </div>
        <div onClick={onRedo} style={controlItemStyle}>
          <i className="material-icons" style={iconStyle}>redo</i>
        </div>
        <div onClick={onReset} style={restartItemStyle}>
          <i className="material-icons" style={iconStyle}>cached</i>
        </div>
      </div>
      <div style={stateStyle}>
        <span style={{...spanStyle, color: immobulus ? steps === 64 ? 'white' : 'red' : 'white'}}>
          {immobulus ? steps === 64 ? 'The knight\'s tour is complete.' : 'You are frozen!!.' : ''}
        </span>
        <span style={spanStyle}>Visited spots: <span style={{color: 'grey'}}>{steps}</span></span>
        <span style={spanStyle}>Current Position: <span style={{color: 'grey'}}>{mapX[x].toUpperCase()}{mapY[y]}</span></span>
      </div>
      <div style={{...messageStyle, border: typeof error !== 'undefined' ? 'solid 3px red' : 'none'}}>
        <span style={spanStyle}>
          {typeof error !== 'undefined' ? 'Ilegal move.' : ''}
        </span>
      </div>
    </div>
  );
};
