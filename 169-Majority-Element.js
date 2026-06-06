/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
    
    const countMap = {};
    
    for (const num of nums) {
        countMap[num] = (countMap[num] || 0) + 1;
    }

    const majorityCount = Math.floor(nums.length / 2);
    for (const [num, count] of Object.entries(countMap)) {
        if (count > majorityCount) {
            return parseInt(num);
        }
    }
};