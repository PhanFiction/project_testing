const capitalize = require('../src/capitalize');

describe('Test capitalize function', () => {
  test('Expect hello to be Hello', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('Expect nope to be Nope', () => {
    expect(capitalize('Nope')).toBe('Nope');
  });

  test('Expect durrian to be Durrian', () => {
    expect(capitalize('durrian')).toBe('Durrian');
  });

  test('Expect cycle to be Cycle', () => {
    expect(capitalize('cycle')).toBe('Cycle');
  });
})