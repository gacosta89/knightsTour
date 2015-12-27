import stampit from 'stampit';
import 'isomorphic-fetch';

export default stampit().methods({
  fetch: typeof window !== 'undefined' ? fetch.bind(window) : fetch
});
