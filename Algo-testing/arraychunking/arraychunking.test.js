const assert = require('assert');
const arrayChunking = require('./arraychunking');

describe('arrayChunking', () => {
  it('should create chunks of a specific size', () => {
    assert.deepStrictEqual(arrayChunking([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
    assert.deepStrictEqual(arrayChunking([1, 2, 3, 4, 5], 3), [[1, 2, 3], [4, 5]]);
    assert.deepStrictEqual(arrayChunking([1, 2, 3, 4, 5], 4), [[1, 2, 3, 4], [5]]);
    assert.deepStrictEqual(arrayChunking([1, 2, 3, 4, 5], 5), [[1, 2, 3, 4, 5]]);
  });
});