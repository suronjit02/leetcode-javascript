/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  const isNegative = x < 0;

  const reversed = parseInt(
    Math.abs(x).toString().split("").reverse().join(""),
  );

  const result = isNegative ? -reversed : reversed;

  return result > -(2 ** 31) && result < 2 ** 31 ? result : 0;
};
