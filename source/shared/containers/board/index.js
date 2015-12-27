import { connect } from 'react-redux';
import createBoard from 'shared/components/board';
import { tourMove } from 'shared/actions/tour';

// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = ({tour, exec}) => {
  return {
    board: tour.board,
    current: tour.moves[tour.current],
    nextMove: exec.tour.length > 0 ? !tour.immobulus ? exec.tour[tour.current + 1] : [] : []
  };
},
  mapDispatchToProps = dispatch => {
    return {
      onClickCell: (i, j) => dispatch(tourMove([i, j]))
    };
  };

export default React => connect(
  mapStateToProps,
  mapDispatchToProps
)(createBoard(React));
