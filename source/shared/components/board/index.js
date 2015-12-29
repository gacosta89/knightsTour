import React from 'react';
import knightIconUrl from 'static/chess-knight-icon.png';
import gambleChipUrl from 'static/gamble-chip-icon.png';
import greyWoodUrl from 'static/grey-wood-texture.jpg';
import blackWoodUrl from 'static/black-wood-texture.jpg';
import targetIconUrl from 'static/target-icon.png';

const boardStyle = {
  width: 700,
  height: 700,
  display: 'flex',
  justifyContent: 'center',
  padding: 15
},
  colStyle = {
    flex: '1 0 0',
    display: 'flex',
    flexDirection: 'column-reverse'
  },
  cellStyle = {
    flex: '1 0 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
  };

const Cell = React.createClass({
  render () {
    const {i, j, current, onClickCell, board, nextMove} = this.props;
    const content = current[0] === i && current[1] === j ?
      <img src={knightIconUrl} style={{width: '80%'}}/> :
        nextMove.length > 0 && nextMove[0] === i && nextMove[1] === j ?
          <img src={targetIconUrl} style={{width: '65%'}}/> :
            board[i][j] === 1 ? <img src={gambleChipUrl} style={{width: '65%'}}/> : '';
    return (
      <div key={j} onClick={onClickCell.bind(this, i, j)}
        style={{
          ...cellStyle,
          background: (i + j) % 2 === 0 ? `url(${blackWoodUrl})` : `url(${greyWoodUrl})`
        }}>
        {content}
      </div>
    );
  }
});

export default () => React.createClass({
  render () {
    const {board, current, nextMove, onClickCell} = this.props;
    return (
      <div style={boardStyle}>
        {board.map((col, i) => <div style={colStyle} key={i}>
          {col.map((row, j) => <Cell i={i} j={j} current={current} board={board} nextMove={nextMove} onClickCell={onClickCell} />)}
        </div>)}
      </div>
    );
  }
});
