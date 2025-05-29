import _ from 'lodash';

function processArrays(a, b) {
  const intersection = _.intersection(a, b);
  const last = _.last(['one', 'two']);
  return { intersection, last };
}

export default processArrays;
