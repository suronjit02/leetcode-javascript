/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  //    /[^a-zA-Z0-9]/g Regex to remove non-alphanumeric characters.
  const cleanString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedString = cleanString.split("").reverse().join("");
  return cleanString === reversedString;
};
