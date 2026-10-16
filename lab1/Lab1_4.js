'use strict';

const data = [
  true, 'hello', 5, 12, -200, false, false, 'word',
  null, undefined, { a: 1 }, [1, 2], 0, 'test'
];

const counts = {};

for (const item of data) {
  const type = typeof item;
  if (counts[type]) {
    counts[type] += 1;
  } else {
    counts[type] = 1;
  }
}

console.dir(counts);