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
    height: 60,
    fontSize: 35
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
  };

export default React => ({steps, immobulus, x, y, error, onUndo, onRedo, onReset, onLoad}) => {
  const messageType = typeof error !== 'undefined' ? 'error' : immobulus ?
    steps === 64 ? 'success' : 'error' : '',
    messageText = typeof error !== 'undefined' ? 'Ilegal Move' : immobulus ?
      steps === 64 ? 'The knight\'s tour is complete.' : 'You are frozen!!.' : '',

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
        <div onClick={onReset} style={restartItemStyle}>
          <i className="material-icons" style={iconStyle}>cached</i>
        </div>
      </div>
      <div onClick={onLoad} style={loadSolutionStyle}>
        Load Solution
      </div>
      <div style={stateStyle}>
        <span style={spanStyle}>Visited spots: <span style={{color: 'grey'}}>{steps}</span></span>
        <span style={spanStyle}>Current Position: <span style={{color: 'grey'}}>{mapX[x].toUpperCase()}{mapY[y]}</span></span>
      </div>
      <Message type={messageType}>{messageText}</Message>
    </div>
  );
};
