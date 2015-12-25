import test from 'tape';
import solution from 'shared/solution';
import testSolution from 'shared/reducers/import/testSolution';
import validateCoords from 'shared/reducers/tour/validateCoords';
import generateMatrix from 'shared/util/generateMatrix';
import updateMatrix from 'shared/util/updateMatrix';

test('solution', nest => {
  nest.test('... valid solution', assert => {
    const tour = solution({validateCoords: validateCoords(8, 8), generateMatrix, updateMatrix}),
      expected = {
        valid: true,
        error: ''
      },
      actual = testSolution(8, 8)(tour);

    assert.deepEqual(actual, expected, 'It should validate the solution');
    assert.end();
  });
});
