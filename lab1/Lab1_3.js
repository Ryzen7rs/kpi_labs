'use strict';

const data = [
  true, 'hello', 5, 12, -200, false, false, 'word',
  null, undefined, { a: 1 }, [1, 2], 0, 'test'
];

const counts = {
  number: 0,
  string: 0,
  boolean: 0,
  undefined: 0,
  object: 0
};

for (const item of data) {
  const type = typeof item;
  if (type in counts) {
    counts[type] += 1;
  }
}

console.dir(counts);