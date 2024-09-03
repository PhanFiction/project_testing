function analyzeArray(arr) {
  let maxNum = -Infinity;
  let minNum = Infinity;
  let sum = 0;

  arr.forEach((item) => {
    minNum = item < minNum ? item : minNum;
    maxNum = item > maxNum ? item : maxNum; 
    sum += item;
  });

  return {
    average: sum / arr.length,
    min: minNum,
    max: maxNum,
    length: arr.length,
  }
}

module.exports = analyzeArray