/**
 * @param {string} s
 * @return {string}
 */
const reverseOnlyLetters = (s) => {
  const isLetter = (char) => /[a-zA-Z]/.test(char);
  const letters = s.split("").filter(isLetter);
  const reversedLetters = letters.reverse();
  let letterIndex = 0;
  return s
    .split("")
    .map((char) => (isLetter(char) ? reversedLetters[letterIndex++] : char))
    .join("");
};
