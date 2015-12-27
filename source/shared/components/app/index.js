import createViewport from 'shared/components/viewport';
import createSection from 'shared/components/section';
import createJumbo from 'shared/components/jumbo';
import createLoadPanel from 'shared/containers/loadpanel';
import createBoard from 'shared/containers/board';
import createControlBar from 'shared/containers/controlBar';
import createCoord from 'shared/components/coordinates';
import { mapX as x, mapY as y } from 'shared/util/coords';

import blueLeatherUrl from 'static/blue-leather-texture.jpg';

export default ({React, impSolution}) => () => {
  const Viewport = createViewport(React),
    Section = createSection(React),
    Jumbo = createJumbo(React),
    LoadPanel = createLoadPanel({impSolution, React}),
    Board = createBoard(React),
    Coordinates = createCoord(React),
    ControlBar = createControlBar(React),
    jumboStyle = {
      background: `url(${blueLeatherUrl})`
    };

  return (
    <Viewport>
      <Section style={{alignItems: 'flex-start'}}>
        <Jumbo style={jumboStyle}>
          <Coordinates coord={y} style={{flexDirection: 'column-reverse', height: 700, width: 40, fontSize: 35, color: 'grey'}} />
        </Jumbo>
        <Section style={{flexDirection: 'column'}}>
          <Jumbo style={jumboStyle}>
            <Board board={ [[1, 1], [0, 1]]}/>
          </Jumbo>
          <Jumbo style={jumboStyle}>
            <Coordinates coord={x.map( s => s.toUpperCase())} style={{height: 40, width: 700, fontSize: 35, color: 'grey'}} />
          </Jumbo>
        </Section>
        <Jumbo style={jumboStyle}>
          <ControlBar />
        </Jumbo>
      </Section>
      <LoadPanel />
    </Viewport>
  );
};
