/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    const current = roman[s[i]];
    const next = roman[s[i + 1]];

    if (current < next) {
      sum += next - current;
      i++;
    } else {
      sum += current;
    }
  }
  return sum;
};

console.log(romanToInt("MCMXCIV"));
console.log(romanToInt("IX"));
