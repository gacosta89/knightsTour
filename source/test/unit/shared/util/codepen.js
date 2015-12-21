import test from 'tape';
import stampit from 'stampit';
import codepenFactory from 'shared/util/codepen';

test('codepen service', nest => {
  nest.test('... getJS', assert => {
    const codepen = codepenFactory.compose(stampit.methods({
      fetch () {
        return new Promise(resolve => {
          resolve('Hey Im a knight tour solution.');
        });
      }
    }))(),
      expected = 'Hey Im a knight tour solution.';

    codepen.getJS('http://codepen.io/gacosta89/pen/EPyXXp.js').then(actual => {
      assert.equal(actual, expected, 'It should return the solution.');
      assert.end();
    })
      .catch(() => {
        assert.fail('It should not throw an error.');
      });
  });
});
