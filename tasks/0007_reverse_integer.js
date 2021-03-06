/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

/**
 * @param {number} x
 * @return {number}
 */
 
var reverse = function(x) {
    let limit = 2147483648;
    let k = x < 0 ? -1 : 1;
    let n = parseInt(String(Math.abs(x)).split('').reverse().join(''));
    return n > limit ? 0 : n * k;
};