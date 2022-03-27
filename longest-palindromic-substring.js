/**
 * @param {string} s
 * @return {string}
 */

const expand = (str, lt, rt, startStr) => {
  const len = str.length;

  if (rt > len - 1) return false;

  while (lt >= 0 && rt < len && str[lt] === str[rt] && str[lt] && str[rt]) {
    startStr = str[lt] + startStr + str[rt];
    lt--;
    rt++;
  }

  return startStr;
};

var longestPalindrome = function (s) {

  if (s.length === 1) return s;
  
  if (s.length === 2) {
    if (s[0] === s[1]) return s;
    else return s[0];
  }

  if (s === s.split("").reverse().join("")) return s;

  let res = [];

  for (let i = 0; i < s.length; i++) {
    // 홀수 확장
    const pal1 = expand(s, i, i + 1, "");
    if (pal1) res.push(pal1);

    // 짝수 확장
    const pal2 = expand(s, i, i + 2, s[i + 1]);
    if (pal2) res.push(pal2);
  }

  res.sort((a, b) => b.length - a.length);

  return res[0];
};

const s = "eabcb";
console.log(longestPalindrome(s));
