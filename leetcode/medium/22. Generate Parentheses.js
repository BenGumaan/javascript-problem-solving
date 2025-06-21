/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
      const result = [];
  
  function buildParentheses(open = 0, close = 0, currentCombination = "") {
    if (open + close === 2*n) {
      result.push(currentCombination);
      return;
    }
    if (open < n) {
      buildParentheses(open + 1, close, currentCombination + '(');
    }
    if (close < open) {
      buildParentheses(open, close + 1, currentCombination + ')');
    }
  }

  buildParentheses();
  return result;
};


// Problem link: https://leetcode.com/problems/generate-parentheses/