import test from 'tape';
import generateMatrix from 'shared/util/generateMatrix';

test('generateMatrix', assert => {
  const expected = [[0, 0], [0, 0]],
    actual = generateMatrix(2, 2)(0);

    assert.deepEqual(actual, expected, 'It should return a 2x2 matrix.');
    assert.end();
});
