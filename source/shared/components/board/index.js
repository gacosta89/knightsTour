const createCell = React => ({i, j, current, onClickCell, board}) => {
  const content = current[0] === i && current[1] === j ?
    <img src='/static/chess-knight-icon.png' style={imgStyle}/> :
      board[i][j] === 1 ? 1 : '';
  return (
    <div key={j} onClick={onClickCell.bind(this, i, j)}
      style={{
        ...cellStyle,
        backgroundColor: (i+j) % 2 === 0 ? 'grey' : 'white'
      }}>
      {content}
    </div>
  );
};

export default React => ({board, current, onClickCell}) => {
  const Cell = createCell(React);
  return (
    <div style={boardStyle}>
      {board.map((col, i) => <div key={i}>
        {col.map((row, j) => <Cell i={i} j={j} current={current} onClickCell={onClickCell} board={board} />)}
      </div>)}
    </div>
  );
}

const boardStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start'
},
  cellStyle = {
    height: 40,
    width: 40,
    border: 'solid 1px black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgStyle = {
    height: 40,
    width: 40
  };
