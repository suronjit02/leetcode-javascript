/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */


var myAtoi = function (s) {
  let i = 0;
  let sign = 1;
  let result = 0;

  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);

  // Skip leading whitespace
  while (i < s.length && /\s/.test(s[i])) {
    i++;
  }

  // Check sign
  if (s[i] === "+" || s[i] === "-") {
    sign = s[i] === "-" ? -1 : 1;
    i++;
  }

  // Convert digits
  while (i < s.length && /\d/.test(s[i])) {
    let digit = Number(s[i]);

    if (result > Math.floor((INT_MAX - digit) / 10) && sign === 1) {
      return INT_MAX;
    }

    if (result > Math.floor((Math.abs(INT_MIN) - digit) / 10) && sign === -1) {
      return INT_MIN;
    }

    result = result * 10 + digit;
    i++;
  }

  return result * sign;
};

// @lc code=end
