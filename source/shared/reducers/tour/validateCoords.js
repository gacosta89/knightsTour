import { inRange } from 'lodash';

export default (maxX, maxY) => coord => {
  return inRange(coord[0], maxX) && inRange(coord[1], maxY);
};
