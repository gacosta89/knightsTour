import { connect } from 'react-redux';
import createControlBar from 'shared/components/controlBar';
import { tourUndo, tourRedo, tourReset, tourInit } from 'shared/actions/tour';
import { impShowPanel } from 'shared/actions/import';
import { getX, getY } from 'shared/util/coords';

// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = ({tour, imp}) => {
  return {
    steps: tour.current + 1,
    immobulus: tour.immobulus,
    error: tour.error,
    x: tour.moves[tour.current][0],
    y: tour.moves[tour.current][1],
    infoMessage: typeof imp.solution === 'function' ? imp.valid === false ?
        'Invalid solution.' :
        'Valid solution.' : ''
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
      onReset (x, y) {
        dispatch(tourReset());
        dispatch(tourInit([getX(x), getY(y)]));
      },
      onLoad () {
        dispatch(impShowPanel());
      }
    };
  };

export default () => connect(
  mapStateToProps,
  mapDispatchToProps
)(createControlBar());
