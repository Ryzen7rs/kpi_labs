'use strict';

const methods = (iface) => {
  const result = [];
  for (const name in iface) {
    const fn = iface[name];
    if (typeof fn === 'function') {
      result.push([name, fn.length]);
    }
  }
  return result;
};

module.exports = { methods };