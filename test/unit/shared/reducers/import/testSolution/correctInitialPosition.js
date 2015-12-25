import test from 'tape';
import correctInitialPosition from 'shared/reducers/import/testSolution/correctInitialPosition';

test('correctInitialPosition', nest => {
  nest.test('... correct solution', assert => {
    const solution = ini => [ini, [2, 0], [2, 1]],
      expected = true,
      actual = correctInitialPosition(8, 8)(solution);
      assert.equal(actual, expected, 'It should return true.');
      assert.end();
    });
    nest.test('... incorrect solution', assert => {
      const solution = () => [[2, 1], [0, 1]],
        expected = false,
        actual = correctInitialPosition(8, 8)(solution);
      assert.equal(actual, expected, 'It should return false.');
      assert.end();
    });
});
