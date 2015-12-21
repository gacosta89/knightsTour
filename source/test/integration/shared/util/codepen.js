import test from 'tape';
import codepenFactory from 'shared/util/codepen';

test('codepen integration', nest => {
  nest.test('... getJS', assert => {
    const codepen = codepenFactory(),
      expected = `(function (){
        return 'Knights tour test';
      })();`;

    codepen.getJS('http://codepen.io/gacosta89/pen/EPyXXp.js').then(actual => {
      assert.equal(actual, expected, 'It should return the solution.');
      assert.end();
    })
      .catch(error => {
        assert.fail(`It should not throw an error: ${error.toString()}`);
        assert.end();
      });
  });
});
