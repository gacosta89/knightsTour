import createViewport from 'shared/components/viewport';
import createJumbo from 'shared/components/jumbo';
import createBoard from 'shared/containers/board';

import blueLeatherUrl from 'static/blue-leather-texture.jpg';

export default React => ({ title }) => {
  const Viewport = createViewport(React),
    Jumbo = createJumbo(React),
    Board = createBoard(React),
    jumboStyle = {
      background: `url(${blueLeatherUrl})`
    };

  return (
    <Viewport>
      <Jumbo style={jumboStyle}>
        <Board board={ [[1, 1], [0, 1]]}/>
      </Jumbo>
    </Viewport>
  );
};
