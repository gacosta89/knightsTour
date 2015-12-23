import _ from 'lodash';

export default (maxX, maxY) => coord => {
  return _.inRange(coord[0], maxX + 1) && _.inRange(coord[1], maxY + 1);
};
