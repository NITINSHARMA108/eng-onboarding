const printFibonacci = require('../index');

describe('based on input values', () => {
  test('negative values as input', () => {
    expect(printFibonacci(-1)).toBe('only natural numbers are allowed');
  });

  test('0 as input', () => {
    expect(printFibonacci(0)).toBe('only natural numbers are allowed');
  });

  test('input type not number', () => {
    expect(printFibonacci('abcdef')).toBe('only natural numbers are allowed');
  });

  test('fraction numbers as input', () => {
    expect(printFibonacci(2.35)).toEqual('only natural numbers are allowed');
  });

  test('input as array', () => {
    expect(printFibonacci([1, 2, 3])).toEqual('only natural numbers are allowed');
  });

  test('number embedded in quotes', () => {
    expect(printFibonacci('123')).toEqual('only natural numbers are allowed');
  });
});

describe('output values', () => {
  test('output when number = 1', () => {
    expect(printFibonacci(1)).toEqual([0]);
  });

  test('output when number = 2', () => {
    expect(printFibonacci(2)).toEqual([0, 1]);
  });

  test('output when number = 10', () => {
    expect(printFibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });
});
