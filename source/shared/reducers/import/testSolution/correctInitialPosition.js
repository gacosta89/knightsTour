import _ from 'lodash';
import generateInitialPosition from 'shared/util/generateInitialPosition';

export default (maxX, maxY) => f => {
  if (typeof f !== 'function') {
    throw Error('First argument should be a function');
  }
  const initial = generateInitialPosition(maxX, maxY)(20),
    transformed = initial.map(coord => f(coord)[0]);

  return _.zipWith(
      _.flatten(initial),
      _.flatten(transformed),
      (left, right) => left === right
    ).every(res => res);
};
