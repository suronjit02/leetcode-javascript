// /**
//  * @param {number} x
//  * @return {boolean}
//  */
const isPalindrome = (x) => {
  const revers = Number(String(x).split("").reverse().join(""));

  return revers === x ? true : false;
};
