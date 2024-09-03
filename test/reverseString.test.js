const reverseString = require('../src/reverseString');

describe('Test reverseString function', () => {
  test('Expect hello to be olleh', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('Expect nope to be epon', () => {
    expect(reverseString('nope')).toBe('epon');
  });

  test('Expect durrian to be nairrud', () => {
    expect(reverseString('durrian')).toBe('nairrud');
  });

  test('Expect cycle to be elcyc', () => {
    expect(reverseString('cycle')).toBe('elcyc');
  });
})