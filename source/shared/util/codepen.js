import stampit from 'stampit';
import fetchFactory from 'shared/util/fetch';

export default fetchFactory.compose(stampit().methods({
  getJS (url) {
    return this.fetch(url).then(res => res.text());
  }
}));
