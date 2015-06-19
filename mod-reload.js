'use strict';

function clearChildren(parent) {
  parent.children.forEach(function (child) {
    delete require.cache[child.id];
  });
}

module.exports = function reload() {
  var parent = module.parent;
  var pID = parent.id;
  var cache = require.cache;

  clearChildren(parent);

  delete cache[pID];
  if (typeof cache[pID] !== 'undefined') {
    throw new Error('Unable to clear cache');
  }

  return require(pID);
};
