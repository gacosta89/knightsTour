import createTitle from 'shared/components/title/index.js';
import createBoard from 'shared/components/board/index.js';

export default React => ({ title }) => {
  const Title = createTitle(React);

  return (
    <div>
      <Title title={ title }/>
    </div>
  );
};
