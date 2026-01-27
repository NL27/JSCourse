const isPalindrome = require('./palindrome');

describe('isPalindrome', () => {
  it('should be a function', () => {
    expect(typeof isPalindrome).toEqual('function');
  });

  it('should return true for palindrome strings', () => {
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('madam')).toBe(true);
    expect(isPalindrome('level')).toBe(true);
    expect(isPalindrome('radar')).toBe(true);
  });

  it('should return false for non-palindrome strings', () => {
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome('world')).toBe(false);
    expect(isPalindrome('javascript')).toBe(false);
  });

  it('should return true for an empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });

  it('should return true for a single character', () => {
    expect(isPalindrome('a')).toBe(true);
    expect(isPalindrome('z')).toBe(true);
  });

  it('should return true for strings with same characters', () => {
    expect(isPalindrome('aaa')).toBe(true);
    expect(isPalindrome('bbbbb')).toBe(true);
  });

  it('should be case-sensitive', () => {
    expect(isPalindrome('Racecar')).toBe(false);
    expect(isPalindrome('Madam')).toBe(false);
  });

  it('should handle palindromes with numbers', () => {
    expect(isPalindrome('12321')).toBe(true);
    expect(isPalindrome('123321')).toBe(true);
    expect(isPalindrome('12345')).toBe(false);
  });

  it('should handle strings with spaces literally', () => {
    expect(isPalindrome(' aba ')).toBe(true);
    expect(isPalindrome('a b a')).toBe(true);
    expect(isPalindrome('race car')).toBe(false);
  });

  it('should handle special characters', () => {
    expect(isPalindrome('!@!')).toBe(true);
    expect(isPalindrome('@#$#@')).toBe(true);
    expect(isPalindrome('!@#')).toBe(false);
  });
});

