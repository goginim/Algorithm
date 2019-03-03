// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

// https://leetcode.com/problems/plus-one/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let up = false;
  let result = [];
  result = digits.concat([]);
  
  for(let i=result.length-1; i>=0; i--) {
      if(up) {
          if(result[i] + 1 > 9) {
              up = true;
              result[i] = (result[i] + 1) % 10;
          } else {
              result[i] = result[i] + 1;
              up = false;
              break;
          }
      } else {
          if(result[i] + 1 > 9) {
              up = true;
              result[i] = (result[i] + 1) % 10;
          } else {
              result[i] = result[i] + 1;
              up = false;
              break;
          }    
      }
      
  }
  
  if(up) {
      result = [1].concat(result);
  }
  return result;
};