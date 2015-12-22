import stampit from 'stampit';
import 'isomorphic-fetch';

export default stampit().methods({
  fetch,
  getJS (url) {
    return this.fetch(url).then(res => res.text());
  }
});
