const sub = require('./sub');

describe('sub function', () => {
  describe('basic subtraction')
    test('adds 1 + 2 to equal 3', () => {
      expect(sub(3, 2)).toBe(1);
    });
    test('subtract zero', () => {
      expect(sub(9,0)).toBe(9);
    });
    test('subtract to zero', () => {
      expect(sub(9,9)).toBe(0);
    });    
    test('subtract below zero', () => {
      expect(sub(9,18)).toBe(-9);
    });
    test('subtract nergative numbers', () => {
      expect(sub(-9,-9)).toBe(-18);
    });
  });
  describe('edge tests', () => {
    test('string input', () => {
      expect(sub('a','m')).toBeNan();
    });
        test('undefined input', () => {
      expect(sub(undefined, 2)).toBeNaN();
    });
 
});
