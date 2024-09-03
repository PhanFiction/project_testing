const Calculator = require('../src/calculator');
const calculator = require('../src/calculator');

describe('Testing Calculator', () => {
  const calculator = new Calculator();
  test('Test subtraction method of 5 - 2 = 3', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
  });

  test('Test add method of 5 + 2 = 7', () => {
    expect(calculator.add(5, 2)).toBe(7);
  });

  test('Test divide method of 6 / 2 = 3', () => {
    expect(calculator.divide(6, 2)).toBe(3);
  });
});