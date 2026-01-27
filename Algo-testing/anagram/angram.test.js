const isAnagram = require('./anagram');

describe('isAnagram', () => {
  it('should be a function', () => {
    expect(typeof isAnagram).toEqual('function');
  });

  it('should return true for valid anagrams', () => {
    expect(isAnagram('listen', 'silent')).toBe(true);
    expect(isAnagram('rail safety', 'fairy tales')).toBe(true);
    expect(isAnagram('elbow', 'below')).toBe(true);
    expect(isAnagram('state', 'taste')).toBe(true);
  });

  it('should return false for non-anagrams', () => {
    expect(isAnagram('hello', 'world')).toBe(false);
    expect(isAnagram('abc', 'def')).toBe(false);
    expect(isAnagram('test', 'best')).toBe(false);
  });

  it('should return false for strings of different lengths', () => {
    expect(isAnagram('abc', 'abcd')).toBe(false);
    expect(isAnagram('hello', 'hi')).toBe(false);
    expect(isAnagram('a', 'aa')).toBe(false);
  });

  it('should be case-insensitive', () => {
    expect(isAnagram('Listen', 'Silent')).toBe(true);
    expect(isAnagram('ELBOW', 'below')).toBe(true);
    expect(isAnagram('State', 'TASTE')).toBe(true);
  });

  it('should return true for identical strings', () => {
    expect(isAnagram('hello', 'hello')).toBe(true);
    expect(isAnagram('abc', 'abc')).toBe(true);
  });

  it('should return true for empty strings', () => {
    expect(isAnagram('', '')).toBe(true);
  });

  it('should return true for single character anagrams', () => {
    expect(isAnagram('a', 'a')).toBe(true);
    expect(isAnagram('A', 'a')).toBe(true);
  });

  it('should return false for single character non-anagrams', () => {
    expect(isAnagram('a', 'b')).toBe(false);
  });

  it('should handle strings with repeated characters', () => {
    expect(isAnagram('aabb', 'abab')).toBe(true);
    expect(isAnagram('aabb', 'abba')).toBe(true);
    expect(isAnagram('aabb', 'aaab')).toBe(false);
  });

  it('should handle strings with spaces', () => {
    expect(isAnagram('a b', 'b a')).toBe(true);
    expect(isAnagram('ab', 'a b')).toBe(false);
  });

  it('should handle strings with numbers', () => {
    expect(isAnagram('123', '321')).toBe(true);
    expect(isAnagram('a1b2', 'b2a1')).toBe(true);
    expect(isAnagram('123', '124')).toBe(false);
  });

  it('should handle strings with special characters', () => {
    expect(isAnagram('a!b', 'b!a')).toBe(true);
    expect(isAnagram('@#$', '$#@')).toBe(true);
    expect(isAnagram('a!', 'a?')).toBe(false);
  });
});





