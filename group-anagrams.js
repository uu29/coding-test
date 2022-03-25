/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();
  for (const a of strs) {
    let s = a.split("").sort().join("");
    if (map.has(s)) map.set(s, [...map.get(s), a]);
    else map.set(s, [a]);
  }

  const arr = [];
  for (const [key, val] of map) {
    arr.push(val);
  }

  return arr.sort((a, b) => a.length - b.length);
};
