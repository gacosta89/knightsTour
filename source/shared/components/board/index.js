import knightIconUrl from 'static/chess-knight-icon.png';
import greyWoodUrl from 'static/grey-wood-texture.jpg';
import blackWoodUrl from 'static/black-wood-texture.jpg';

const boardStyle = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  padding: 15
},
  colStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  cellStyle = {
    flex: '1 0 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
  },
  imgStyle = {
    width: '80%'
  };

const createCell = React => ({i, j, current, onClickCell, board}) => {
  const content = current[0] === i && current[1] === j ?
    <img src={knightIconUrl} style={imgStyle}/> :
      board[i][j] === 1 ? 1 : '';
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
