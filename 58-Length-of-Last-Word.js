/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
  const words = s.trim().split(" ");
  return words[words.length - 1].length;
};
