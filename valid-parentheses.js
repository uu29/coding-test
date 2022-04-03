// Runtime: 71 ms, faster than 74.16% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 42.4 MB, less than 39.97% of JavaScript online submissions for Valid Parentheses.

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (
      (stack[stack.length - 1] === "(" && s[i] === ")") ||
      (stack[stack.length - 1] === "[" && s[i] === "]") ||
      (stack[stack.length - 1] === "{" && s[i] === "}")
    )
      stack.pop();
    else stack.push(s[i]);
  }
  return !Boolean(stack.length);
};

const s = "()";
const r = isValid(s);
