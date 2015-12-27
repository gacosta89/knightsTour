import test from 'tape';
import solution from 'shared/solution';
import validateCoords from 'shared/reducers/tour/validateCoords';
import generateMatrix from 'shared/util/generateMatrix';
import updateMatrix from 'shared/util/updateMatrix';
import correctTour from 'shared/reducers/import/testSolution/correctTour';

test('correctTour', nest => {
  nest.test('... correct tour', assert => {
    const tour = solution({validateCoords: validateCoords(8, 8), generateMatrix, updateMatrix}),
      expected = true,
      actual = correctTour(8, 8)(tour);
    assert.equal(actual, expected, 'It should return true.');
    assert.end();
  });
});
