import test from 'tape';
import typeArray from 'shared/util/typeArray';

test('typeFunction', nest => {
  nest.test('... correct array type', assert => {
    const expected = true,
      actual = typeArray([]);
      assert.equal(actual, expected, 'It should return true.');
      assert.end();
    });
    nest.test('... incorrect array type', assert => {
      const expected = false,
        actual = typeArray({});
      assert.equal(actual, expected, 'It should return false.');
      assert.end();
    });
});
