/**
 * @param {number[]} height
 * @return {number}
 */

const getMaxIndex = (arr) => {
  let index = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      index = i;
    }
  }
  return index;
};

const sum = (arr) => {
  let max = 0;
  let stack = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else {
      stack += max - arr[i];
    }
  }
  return stack;
};

var trap = function (height) {
  const index = getMaxIndex(height);
  const ltSum = sum(height.slice(0, index));
  const rtSum = index === height.length - 1 ? 0 : sum(height.reverse().slice(0, height.length - index));

  return ltSum + rtSum;
};
