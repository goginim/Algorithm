// Given scores of N athletes, find their relative ranks and the people with the top three highest scores,
// who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".
//
// Example 1:
// Input: [5, 4, 3, 2, 1]
// Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
// Explanation: The first three athletes got the top three highest scores, so they got "Gold Medal", "Silver Medal" and "Bronze Medal".
// For the left two athletes, you just need to output their relative ranks according to their scores.
// Note:
// N is a positive integer and won't exceed 10,000.
// All the scores of athletes are guaranteed to be unique.

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    var size = nums.length;
    var arr = nums.slice();

    arr.sort((a,b) => {
        return b-a;
    });

    for(var i=0; size>i; i++) {
        var index = `${arr.indexOf(nums[i])}`;

        if(index == 0)
            nums[i] = "Gold Medal";
        else if(index == 1)
            nums[i] = "Silver Medal";
        else if(index == 2)
            nums[i] = "Bronze Medal";
        else
            nums[i] = String(Number(index) + 1);
    }

    return nums;
};
