const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
  it('should be a function', () => {
    expect(typeof fizzbuzz).toEqual('function');
  });
  it('should return the number if the number is NOT divisible by 3 or 5', () => {
    expect(fizzbuzz(1)).toEqual(1);
    expect(fizzbuzz(13)).toEqual(13);
  });
  it('should return fizzbuzz if the number is divisible by 3 and 5', () => {
    expect(fizzbuzz(15)).toEqual('fizzbuzz');
    expect(fizzbuzz(30)).toEqual('fizzbuzz');
  });
  it('should return fizz if the number is divisible by 3', () => {
    expect(fizzbuzz(3)).toEqual('fizz');
    expect(fizzbuzz(6)).toEqual('fizz');
  });
  it('should return buzz if the number is divisible by 5', () => {
    expect(fizzbuzz(5)).toEqual('buzz');
    expect(fizzbuzz(10)).toEqual('buzz');
  });
});