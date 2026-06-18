const mult = require('./mult');

test('adds 1 + 2 to equal 3', () => {
  expect(mult(2, 3)).toBe(6);
});