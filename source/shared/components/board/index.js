import knightIconUrl from 'static/chess-knight-icon.png';
import gambleChipUrl from 'static/gamble-chip-icon.png';
import greyWoodUrl from 'static/grey-wood-texture.jpg';
import blackWoodUrl from 'static/black-wood-texture.jpg';

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

const createCell = React => ({i, j, current, onClickCell, board}) => {
  const content = current[0] === i && current[1] === j ?
    <img src={knightIconUrl} style={{width: '80%'}}/> :
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
};

export default React => ({board, current, onClickCell}) => {
  const Cell = createCell(React);
  return (
    <div style={boardStyle}>
      {board.map((col, i) => <div style={colStyle} key={i}>
        {col.map((row, j) => <Cell i={i} j={j} current={current} onClickCell={onClickCell} board={board} />)}
      </div>)}
    </div>
  );
};
