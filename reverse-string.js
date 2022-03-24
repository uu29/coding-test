var reverseString = function (s) {
  let lt = 0;
  let rt = s.length - 1;
  while (lt < rt) {
    let tmp = s[rt];
    s[rt] = s[lt];
    s[lt] = tmp;
    lt++;
    rt--;
  }
};
