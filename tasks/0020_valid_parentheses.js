/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true
 

Constraints:

1 <= s.length <= 10^4
s consists of parentheses only '()[]{}'.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var dictionary = {
        "}" : "{",
        ")" : "(",
        "]" : "["  
    };
    
    var stack = [];
    var openings = ["(", "[", "{"];
    
    for (const char of s) {
        if (openings.includes(char)) {
            stack.push(char);
        } else {
            if(!(stack.pop() == dictionary[char])) {
                return false;
            }
        }
    }
    
    if (stack.length == 0) {
        return true;
    } else {
        return false;
    }
};