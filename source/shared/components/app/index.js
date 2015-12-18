import createTitle from 'shared/components/title';
import createBoard from 'shared/containers/board';

export default React => ({ title }) => {
  const Title = createTitle(React),
    Board = createBoard(React);

  return (
    <div>
      <Title title={ title }/>
      <Board board={ [[1, 1],[0, 1]]}/>
    </div>
  );
};
