import test from 'tape';
import compare from 'shared/util/compareEvery';

test('compareEvery', nest => {
  nest.test('... valid array.', assert => {
    const cb = (prev, curr) => {
      return prev && curr;
    },
      arr = [1, 1, 1, 1, 1],
      expected = true,
      actual = compare(arr, cb);

    assert.equal(actual, expected, 'It should return true.');
    assert.end();
  });

  nest.test('... invalid array.', assert => {
    const cb = (prev, curr) => {
      return prev && curr;
    },
      arr = [true, true, false, true, true],
      expected = false,
      actual = compare(arr, cb);

    assert.equal(actual, expected, 'It should return false.');
    assert.end();
  });
});
