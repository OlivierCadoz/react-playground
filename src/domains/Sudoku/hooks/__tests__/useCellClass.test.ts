import {
  mockSudoku,
  mockSolution,
} from '@/tests/fixtures/sudoku/sudoku.fixture';
import { renderHook } from '@testing-library/react';
import { useCellClass } from '@sudoku/hooks/useCellClass';

const hookParamWithIndex0 = {
  sudoku: mockSudoku,
  solution: mockSolution,
  currentIndex: 0,
};

const hookParamWithUnselected = {
  sudoku: mockSudoku,
  solution: mockSolution,
  currentIndex: -1,
};

describe('useCellClass hook', () => {
  describe('Given currentIndex is -1', () => {
    describe('When calling setCellClass', () => {
      test('Then it return no classes at all', () => {
        const { result } = renderHook(() =>
          useCellClass(hookParamWithUnselected)
        );

        const classes = result.current.setCellClass({ cell: 1, cellIndex: 0 });

        expect(classes).toBe('');
      });
    });
  });

  describe('Given currentIndex is 0 and cell index is 0', () => {
    describe('When calling setCellClass', () => {
      test('Then it return a selected class', () => {
        const { result } = renderHook(() => useCellClass(hookParamWithIndex0));

        const classes = result.current.setCellClass({ cell: 1, cellIndex: 0 });

        expect(classes).toBe('sudoku-cell--selected');
      });
    });
  });

  describe('Given selected value is 1 and cell value is also 1', () => {
    describe('When calling setCellClass', () => {
      test('Then it return a selected class', () => {
        const { result } = renderHook(() => useCellClass(hookParamWithIndex0));

        const classes = result.current.setCellClass({ cell: 1, cellIndex: 64 });

        expect(classes).toBe('sudoku-cell--selected');
      });
    });
  });

  describe('Given selected value is 0 and cell value is also 0', () => {
    describe('When calling setCellClass', () => {
      test('Then it return no class', () => {
        const { result } = renderHook(() => useCellClass(hookParamWithIndex0));

        const classes = result.current.setCellClass({ cell: 0, cellIndex: 64 });

        expect(classes).toBe('');
      });
    });
  });

  describe.each`
    label       | cells
    ${'row'}    | ${[1, 2, 3, 4, 5, 6, 7, 8]}
    ${'column'} | ${[9, 18, 27, 36, 45, 54, 63, 72]}
    ${'bloc'}   | ${[1, 2, 9, 10, 11, 18, 19, 20]}
  `('Given currentIndex is 0 and cell is in the same $label', ({ cells }) => {
    describe('When calling setCellClass', () => {
      test.each([...cells])(
        'Then it return a highlighted class',
        (cellIndex: number) => {
          const { result } = renderHook(() =>
            useCellClass(hookParamWithIndex0)
          );

          const classes = result.current.setCellClass({
            cell: mockSudoku[cellIndex],
            cellIndex,
          });

          expect(classes).toBe('sudoku-cell--highlighted');
        }
      );
    });
  });

  describe('Given cell value is different from same index solution cell', () => {
    describe('When calling setCellClass', () => {
      test('Then it return an error class', () => {
        const { result } = renderHook(() => useCellClass(hookParamWithUnselected));

        const classes = result.current.setCellClass({ cell: 2, cellIndex: 2 });

        expect(classes).toBe('sudoku-cell--error');
      });
    });
  });

  describe('Given cell value is equal to 0', () => {
    describe('When calling setCellClass', () => {
      test('Then it return no class', () => {
        const { result } = renderHook(() => useCellClass(hookParamWithUnselected));

        const classes = result.current.setCellClass({ cell: 0, cellIndex: 1 });

        expect(classes).toBe('');
      });
    });
  });
});
