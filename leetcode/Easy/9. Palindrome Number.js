/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
  const str = x.toString();
  const reversedStr = str.split('').reverse().join('');
  return reversedStr === str;
};


// Problem link: https://leetcode.com/problems/palindrome-number/