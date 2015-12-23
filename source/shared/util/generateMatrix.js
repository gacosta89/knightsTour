import _ from 'lodash';
export default (xdim, ydim) => content => _.fill(Array(xdim), _.fill(Array(ydim), content));
