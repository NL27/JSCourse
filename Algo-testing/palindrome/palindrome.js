// Solution 1
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed
}

// Solution 2
function isPalindrome2(str) {
  return str.split('').every((char, index) => {
    return char === str[str.length - index - 1];
  })
}

module.exports = isPalindrome;