/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function(nums) {
  let sum = nums[0];
  let i = 0;
  while (i + 1 < nums.length && nums[i+1] === nums[i]+1) {
    sum += nums[i+1];
    i++;
  }
  const numsSet = new Set(nums);
  while (numsSet.has(sum)) {
    sum++;
  }
  return sum;
};


console.log(missingInteger([1, 2, 3, 2, 5])); // 6
console.log(missingInteger([3, 4, 5, 1, 12, 14, 13])); // 15
console.log(missingInteger([1])); // 2
console.log(missingInteger([50])); // 51


// Problem link: https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/