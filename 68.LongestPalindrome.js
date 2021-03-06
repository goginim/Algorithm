// Given a string which consists of lowercase or uppercase letters,
// find the length of the longest palindromes that can be built with those letters.
//
// This is case sensitive, for example "Aa" is not considered a palindrome here.
//
// Note:
// Assume the length of given string will not exceed 1,010.
//
// Example:
//
// Input:
// "abccccdd"
//
// Output:
// 7
//
// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    var map = new Map();
    var len = s.length;

    for(i=0; len>i; i++) {
        map.set(s.charAt(i), map.get(s.charAt(i)) + 1 || 1);
    }

    var result = 0;

    map.forEach((value, key) => {

        result += value - (value % 2);
    });

    if(result == len)
        return result;
    else
        return result+1;
};
