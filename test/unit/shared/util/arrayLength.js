import test from 'tape';
import arrayLength from 'shared/util/arrayLength';

test('arrayLength', nest => {
  nest.test('... correct array lenght', assert => {
    const expected = true,
      actual = arrayLength(3)([1, 2, 3]);
      assert.equal(actual, expected, 'It should return true.');
      assert.end();
    });
    nest.test('... incorrect array lenght', assert => {
      const expected = false,
        actual = arrayLength(2)([1, 2, 3]);
      assert.equal(actual, expected, 'It should return false.');
      assert.end();
    });
});
