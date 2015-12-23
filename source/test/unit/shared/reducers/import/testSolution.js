import test from 'tape';
import testSolution from 'shared/reducers/import/testSolution';

test('validateSolution', nest => {
  nest.test('... incorrect solution', assert => {
    const code = '"use strict";\n\n(function () { return {};});',
      expected = {
        valid: false
      },
      actual = testSolution(code);
    assert.deepEqual(actual, expected, 'It should not validate the test.');
    assert.end();
  });
});
