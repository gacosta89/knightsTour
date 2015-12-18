import { connect } from 'react-redux';
import createBoard from 'shared/components/board';
import { tourMove } from 'shared/actions/tour';

// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = state => {
  return {
    board: state.board,
    current: state.moves[state.current]
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
