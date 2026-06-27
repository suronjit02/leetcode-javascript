/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = (nums) => {
  const uniqueNums = Array.from(new Set(nums));
  uniqueNums.sort((a, b) => b - a);

  return uniqueNums.length >= 3 ? uniqueNums[2] : uniqueNums[0];
};
