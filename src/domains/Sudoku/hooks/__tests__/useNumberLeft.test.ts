import { renderHook } from '@testing-library/react';
import { useNumberLeft } from '@sudoku/hooks/useNumberLeft';
import {
  sudokuFixture,
  solutionFixture,
} from '@/tests/fixtures/sudoku/sudoku.fixture';

describe('useNumberLeft', () => {
  describe.each(['sudoku', 'solution'])('Given %s is null', () => {
    describe('When calling the hook', () => {
      test('Then it returns an array of 9 zeros', () => {
        const { result } = renderHook(() => useNumberLeft(null, null));
        expect(result.current.numbersLeft).toEqual(Array(9).fill(0));
      });
    });
  });

  describe('Given sudoku and solution are provided', () => {
    describe('When sudoku or solution change', () => {
      test('Then it returns correct numbers left', () => {
        const { result } = renderHook(() =>
          useNumberLeft(sudokuFixture, solutionFixture)
        );
        expect(result.current.numbersLeft).toEqual([7, 4, 5, 5, 5, 5, 2, 2, 6]);
      });
    });
  });
});
