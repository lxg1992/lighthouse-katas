let repeatNumbers = function(data) {
  let retStr = '';
  for (let i = 0; i < data.length; i++) {
    let num = data[i][0].toString();
    retStr += num.repeat(data[i][1]);
    retStr += ", ";
  }
  retStr = retStr.slice(0, retStr.length - 2);
  return retStr;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));