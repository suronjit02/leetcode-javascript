/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = (dividend, divisor) => {
  const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;

  if (dividend === INT_MIN && divisor === -1) {
    return INT_MAX;
  }

  const negative =
    (dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0);

  let dvd = Math.abs(dividend);
  let dvs = Math.abs(divisor);

  let result = 0;

  while (dvd >= dvs) {
    let temp = dvs;
    let multiple = 1;

    while (dvd >= temp + temp) {
      temp += temp;
      multiple += multiple;
    }

    dvd -= temp;
    result += multiple;
  }

  return negative ? -result : result;
};
