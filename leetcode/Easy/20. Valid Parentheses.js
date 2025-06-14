/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const brackets = { ')': '(', '}': '{', ']': '[' };
    const stack = [];

    for (const char of s) {
        if (!brackets[char]) { 
            stack.push(char);
        } else {
            if (brackets[char] !== stack.pop()) {
                return false;
            }
        }

    }
    return stack.length === 0;
};

// Problem link: https://leetcode.com/problems/valid-parentheses/