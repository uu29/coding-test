const isNum = (val) => !isNaN(val);
const splitStr = (str) => str.split(" ");

var reorderLogFiles = function (logs) {
  const compareFunc = (a, b) => {
    const aSplit = splitStr(a);
    const bSplit = splitStr(b);
    const [aId, ...aCont] = aSplit;
    const [bId, ...bCont] = bSplit;
    let aText = aCont.join("");
    let bText = bCont.join("");
    if (isNum(aText) && isNum(bText)) return 0;
    else if (isNum(aText) && !isNum(bText)) return 1;
    else if (!isNum(aText) && isNum(bText)) return -1;
    else {
      aText = aCont.join(" ");
      bText = bCont.join(" ");
      if (aText === bText) return aId.localeCompare(bId);
      else return aText.localeCompare(bText);
    }
  };

  logs.sort(compareFunc);

  return logs;
};

const logs = ["j mo", "5 m w", "g 07", "o 2 0", "t q h"];
const r = reorderLogFiles(logs);
console.log(r);
