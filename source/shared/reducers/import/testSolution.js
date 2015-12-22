import validateKnightMove from 'shared/reducers/tour/validateKnightMove';
import validateCoords from 'shared/reducers/tour/validateCoords';
import compareEvery from 'shared/util/compareEvery';

export default code => {
  try {
    var f = eval(code);
  } catch (error) {
    return {
      error
    };
  };

  const tour = f(),
    tests = [
      () => {
        return typeof tour === 'function';
      },
      () => {
        return Array.isArray(tour([2, 1]));
      },
      () => {
        return tour([2, 1]).lenght === 64;
      },
      () => {
        return tour([2, 1])[0] === [2, 1] &&
          tour([5, 3])[0] === [5, 3] &&
            tour([4, 4])[0] === [4, 4];
      },
      () => {
        const moves = tour([1, 1]).every(coord => {
          return validateCoords(coord);
        });
        return compareEvery(moves, (prev, curr) => {
          return typeof validateKnightMove(prev, curr) !== 'undefined';
        });
      }
    ];

  return {
    validate: tests.every(test => test())
  };
};
