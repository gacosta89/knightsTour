import stampit from 'stampit';
import nodeFetch from 'node-fetch';

const fetch = typeof window !== 'undefined' ?
  window.fetch : nodeFetch;

export default stampit().methods({
  fetch,
  getJS (url) {
    return this.fetch(url);
  }
});
