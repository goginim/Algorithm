// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.


// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let result = [];
  
  if(numRows !== 0) result.push([1]);
  
  for(let i=1; i<numRows; i++) {
      let resultRow = [];
      resultRow.push(1);
      
      for(let j=1; j<i; j++) {
          resultRow.push(result[i-1][j-1] + result[i-1][j]);
      }
      
      resultRow.push(1);
      result.push(resultRow);
  }
  return result;
};