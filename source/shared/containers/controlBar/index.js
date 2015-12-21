import { connect } from 'react-redux';
import createControlBar from 'shared/components/controlBar';
import { tourUndo, tourRedo, tourReset, tourInit } from 'shared/actions/tour';

// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = state => {
  return {
    steps: state.current + 1,
    immobulus: state.immobulus,
    error: state.error,
    x: state.moves[state.current][0],
    y: state.moves[state.current][1]
  };
},
  mapDispatchToProps = dispatch => {
    return {
      onUndo () {
        dispatch(tourUndo());
      },
      onRedo () {
        dispatch(tourRedo());
      },
      onReset () {
        dispatch(tourReset());
        dispatch(tourInit([0, 0]));
      }
    };
  };

export default React => connect(
  mapStateToProps,
  mapDispatchToProps
)(createControlBar(React));
