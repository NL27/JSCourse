const reverseString = require('./reversestring');

describe('reverseString', () => {
  it('should be a function', () => {
    expect(typeof reverseString).toEqual('function');
  });

  it('should reverse a string', () => {
    expect(reverseString('hello')).toEqual('olleh');
    expect(reverseString('world')).toEqual('dlrow');
  });

  it('should reverse a string with spaces', () => {
    expect(reverseString('hello world')).toEqual('dlrow olleh');
  });

  it('should return an empty string when given an empty string', () => {
    expect(reverseString('')).toEqual('');
  });

  it('should return the same character for a single character string', () => {
    expect(reverseString('a')).toEqual('a');
  });

  it('should handle palindromes', () => {
    expect(reverseString('racecar')).toEqual('racecar');
    expect(reverseString('madam')).toEqual('madam');
  });

  it('should handle strings with numbers', () => {
    expect(reverseString('abc123')).toEqual('321cba');
  });

  it('should handle strings with special characters', () => {
    expect(reverseString('hello!')).toEqual('!olleh');
    expect(reverseString('@#$%')).toEqual('%$#@');
  });
});

