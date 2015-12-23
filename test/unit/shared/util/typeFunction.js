import test from 'tape';
import typeFunction from 'shared/util/typeFunction';

test('typeFunction', nest => {
  nest.test('... correct function type', assert => {
    const expected = true,
      actual = typeFunction(() => {});
    assert.equal(actual, expected, 'It should return true.');
    assert.end();
  });
  nest.test('... incorrect function type', assert => {
    const expected = false,
      actual = typeFunction({});
    assert.equal(actual, expected, 'It should return false.');
    assert.end();
  });
});
