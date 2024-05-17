function processArray (arr) {
  return arr.map(num => (num % 2 === 0) ? num ** 2 : num ** 3);
}

function formatArrayStrings(strArr, numArr) {
  return strArr.map((str, index) =>
   (numArr[index] % 2 === 0) ? str.toUpperCase( ) : str.toLowerCase( ) );
}

module.exports = {
  processArray, formatArrayStrings
};
