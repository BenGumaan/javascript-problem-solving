/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const symbols = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
      'IV': 4,
      'IX': 9,
      'XL': 40,
      'XC': 90,
      'CD': 400,
      'CM': 900,
    }

    const symbolSet = new Set(Object.keys(symbols));
    let result = [];
    let i = 0;
   
    while (i < s.length) {
      const letters = (i + 1 < s.length) ? s[i] + s[i+1] : null;
      if (letters && symbolSet.has(letters)) {
        result.push(letters);
        i += 2;
      } else {
        result.push(s[i]);
        i++;
      }
    }

    return result.reduce((sum, letter) => sum + symbols[letter], 0);
};


// Problem link: https://leetcode.com/problems/roman-to-integer/