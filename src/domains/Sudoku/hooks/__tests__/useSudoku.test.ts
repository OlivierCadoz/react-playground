import { renderHook, act } from '@testing-library/react';
import { useSudoku } from '@sudoku/hooks/useSudoku';
import { deepClone } from '@sudoku/utils';
import {
  mockGrid,
  mockSudoku,
  mockSolution,
} from '@/tests/fixtures/sudoku/sudoku.fixture';
import { GridModel } from '@sudoku/models/sudoku.model';

vi.mock('@sudoku/utils', () => ({
  deepClone: vi.fn((obj: any) => JSON.parse(JSON.stringify(obj))),
}));

describe('useSudoku hook', () => {
  describe('Given grid param is null', () => {
    describe('When calling the hook', () => {
      test('Then it initializes with null values when grid is null', () => {
        const { result } = renderHook(() => useSudoku(null));

        expect(result.current.sudoku).toBeNull();
        expect(result.current.solution).toBeNull();
        expect(result.current.currentIndex).toBe(-1);
        expect(result.current.isSolved).toBe(false);
      });
    });
  });

  describe('Given grid param is not null', () => {
    describe('When calling the hook', () => {
      test('Then it initializes with grid values when grid is provided', () => {
        const { result } = renderHook(() => useSudoku(mockGrid));

        expect(deepClone).toHaveBeenCalledWith(mockSudoku);
        expect(deepClone).toHaveBeenCalledWith(mockSolution);
        expect(result.current.sudoku).toEqual(mockSudoku);
        expect(result.current.solution).toEqual(mockSolution);
      });
    });

    describe('When calling handleCellClick function', () => {
      test('Then it updates currentIndex', () => {
        const { result } = renderHook(() => useSudoku(mockGrid));

        act(() => {
          result.current.handleCellClick(5);
        });

        expect(result.current.currentIndex).toBe(5);
      });
    });

    describe('When calling handleValueChange function', () => {
      test('Then it updates sudoku and check if solved on handleValueChange', () => {
        const { result } = renderHook(() => useSudoku(mockGrid));

        act(() => {
          result.current.handleCellClick(1);
        });
        act(() => {
          result.current.handleValueChange(9);
        });

        expect(result.current.sudoku?.[1]).toBe(9);
        expect(result.current.isSolved).toBe(false);
      });

      test('Then it does not update sudoku if current cell is already correct', () => {
        const { result } = renderHook(() => useSudoku(mockGrid));

        act(() => {
          result.current.handleCellClick(0);
          result.current.handleValueChange(1);
        });

        expect(result.current.sudoku?.[0]).toBe(1);
      });
    });

    test('Then it sets isSolved to true when sudoku is solved', () => {
      const sudokuResolved = deepClone(mockGrid.solution);
      sudokuResolved[0][1] = 0;
      const _mockGrid: GridModel = { ...mockGrid, value: sudokuResolved };
      const { result } = renderHook(() => useSudoku(_mockGrid));

      act(() => {
        result.current.handleCellClick(1);
      });

      act(() => {
        result.current.handleValueChange(5);
      });

      expect(result.current.isSolved).toBe(true);
    });
  });
});
