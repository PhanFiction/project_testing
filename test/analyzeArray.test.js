const analyzeArray = require('../src/analyzeArray');

describe('Test analyze array', () => {
  test('[1,8,3,4,2,6]', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    })
  });

  test('[2,3,4,6,2,1]', () => {
    expect(analyzeArray([2,3,4,6,2,1])).toEqual({
      average: 3,
      min: 1,
      max: 6,
      length: 6
    })
  });

})