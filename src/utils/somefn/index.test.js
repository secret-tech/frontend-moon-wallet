import { somefn, anotherfn } from './index';

describe('somefn', () => {
  test('(1 + 2) * 3 must be 9', () => {
    expect(somefn(1, 2, 3)).toBe(9);
  });

  test('(2 + 3) * 0 must be 0', () => {
    expect(somefn(2, 3, 0)).toBe(0);
  });
});

describe('anotherfn', () => {
  test('1 + 2 must be 3', () => {
    expect(anotherfn(1, 2)).toBe(3);
  });

  test('2 + 3 must be 5', () => {
    expect(anotherfn(2, 3)).toBe(5);
  });
});
