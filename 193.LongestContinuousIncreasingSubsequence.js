// Given an unsorted array of integers, find the length of longest continuous increasing subsequence (subarray).

// Example 1:
// Input: [1,3,5,4,7]
// Output: 3
// Explanation: The longest continuous increasing subsequence is [1,3,5], its length is 3. 
// Even though [1,3,5,7] is also an increasing subsequence, it's not a continuous one where 5 and 7 are separated by 4. 
// Example 2:
// Input: [2,2,2,2,2]
// Output: 1
// Explanation: The longest continuous increasing subsequence is [2], its length is 1. 
// Note: Length of the array will not exceed 10,000.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let size = nums.length;
    let maxLen = 0;
    let count = 0;
    let prev = Number.NEGATIVE_INFINITY;
    
    for(let i=0; size>i; i++) {
        if(nums[i] > prev) {
            count++;
        } else {
            if(count > maxLen) maxLen = count;
            count = 1;
        }            
        prev = nums[i];
    }
    
    maxLen = Math.max(count, maxLen);
    
    return maxLen;
}