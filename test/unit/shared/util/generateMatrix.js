import test from 'tape';
import generateMatrix from 'shared/util/generateMatrix';

test('generateMatrix', nest => {
  nest.test('... 2x2 matrix.', assert => {
    const expected = [[0, 0], [0, 0]],
      actual = generateMatrix(2, 2)(0);

      assert.deepEqual(actual, expected, 'It should return a 2x2 matrix.');
      assert.end();
  });

  nest.test('... clone object', assert => {
    const expected = [[1, 0], [0, 0]];
    let actual = generateMatrix(2, 2)(0);
      actual[0][0] = 1;

      assert.deepEqual(actual, expected, 'It should not clone the array.');
      assert.end();
  });
});
