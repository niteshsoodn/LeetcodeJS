/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    var min = Math.min.apply(Math, strs.map(function(str) {return str.length}));
    
    var result = "";
    
    for (let i = 0; i < min; i++) {
        if (new Set(strs.map((str) => str[i])).size == 1) {
            result = result + strs[0][i];
        } else {
            return result;
        }
    }
    return result;
};
