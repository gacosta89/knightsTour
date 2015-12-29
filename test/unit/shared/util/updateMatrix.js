import test from 'tape';
import updateMatrix from 'shared/util/updateMatrix';

test('updateMatrix', nest => {
  nest.test('... 2x2 matrix.', assert => {
    const expected = [[0, 0], [0, 5]],
      actual = updateMatrix([[0, 0], [0, 0]], [1, 1], 5);

      assert.deepEqual(actual, expected, 'It should return an updated 2x2 matrix.');
      assert.end();
  });

  nest.test('... out of boundaries coord', assert => {
    const expected = [[1, 0], [0, 1]],
      actual = updateMatrix([[1, 0], [0, 1]], [1, 2], 5);

      assert.deepEqual(actual, expected, 'It should return the original 2x2 matrix.');
      assert.end();
  });
});
