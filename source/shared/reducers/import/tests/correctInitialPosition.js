import _ from 'lodash';
import typeFunction from 'shared/util/typeFunction';
import getRandomInt from 'shared/util/getRandomInt';

export default rowMax => f => {
  if (!typeFunction(f)) {
    throw Error('First argument should be a function');
  }
  const randomCero = getRandomInt(0),
    initial = _.zipWith(
      _.range(20).map(num => randomCero(rowMax)()),
      _.range(20).map(num => randomCero(rowMax)()),
      (left, right) => [left, right]),
    transformed = initial.map(coord => f(coord)[0]);

  return _.zipWith(
      _.flatten(initial),
      _.flatten(transformed),
      (left, right) => left === right
    ).every(res => res);
};
