// Given a binary array, find the maximum number of consecutive 1s in this array.

// Example 1:
// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.
// Note:

// The input array will only contain 0 and 1.
// The length of input array is a positive integer and will not exceed 10,000

// https://leetcode.com/problems/max-consecutive-ones/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxLen = 0;
    let len = 0;
    
    for(let i=0; i<nums.length; i++) {
        if(nums[i] === 1) {
            len++;
        } else {
            maxLen = Math.max(maxLen, len);
            len = 0;
        }
    }
    return Math.max(maxLen, len);
};