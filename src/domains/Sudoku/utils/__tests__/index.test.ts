import { deepClone } from '@sudoku/utils/index';

describe('deepClone function', () => {
  describe('Given value to clone is an array', () => {
    describe('When calling deepClone', () => {
      test('It clones an array', () => {
        const array = [1, 2, 3];

        const clonedArray = deepClone(array);

        expect(clonedArray).toEqual(array);
        expect(clonedArray).not.toBe(array);
      });
    });
  });

  describe('Given value to clone is a nested array', () => {
    describe('When calling deepClone', () => {
      test('It clones a nested array', () => {
        const nestedArray = [
          [1, 2],
          [3, 4],
        ];

        const clonedNestedArray = deepClone(nestedArray);

        expect(clonedNestedArray).toEqual(nestedArray);
        expect(clonedNestedArray).not.toBe(nestedArray);
        expect(clonedNestedArray[0]).not.toBe(nestedArray[0]);
      });
    });
  });

  describe('Given value to clone is an object', () => {
    describe('When calling deepClone', () => {
      test('It clones an object', () => {
        const obj = { a: 1, b: 2 };

        const clonedObj = deepClone(obj);

        expect(clonedObj).toEqual(obj);
        expect(clonedObj).not.toBe(obj);
      });
    });
  });

  describe('Given value to clone is a nested object', () => {
    describe('When calling deepClone', () => {
      test('It clones a nested object', () => {
        const nestedObj = { a: { b: 2 } };

        const clonedNestedObj = deepClone(nestedObj);

        expect(clonedNestedObj).toEqual(nestedObj);
        expect(clonedNestedObj).not.toBe(nestedObj);
        expect(clonedNestedObj.a).not.toBe(nestedObj.a);
      });
    });
  });
});
