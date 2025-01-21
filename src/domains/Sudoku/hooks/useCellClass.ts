import { useCallback } from 'react';
import {
  SetCellClassParameters,
  UseCellClassParameters,
} from '@sudoku/models/cellClass.model';

export function useCellClass({
  sudoku,
  currentIndexes,
}: UseCellClassParameters) {

  const setCellClass = useCallback(
    ({ cell, rowIndex, cellIndex }: SetCellClassParameters) => {
      const [rowIdx, cellIdx] = currentIndexes || [-1, -1];
      const sudokuValue = sudoku?.[rowIdx]?.[cellIdx];
      const isSameRowIdx = rowIndex === rowIdx;
      const isSameCellIdx = cellIndex === cellIdx;
      const isSameRowOrCellIdx = isSameRowIdx || isSameCellIdx;
      const isSelectedOrSameValueAsSelected =
        (isSameRowIdx && isSameCellIdx) || (cell && sudokuValue === cell);

      if (isSelectedOrSameValueAsSelected) return 'sudoku-cell--selected';
      if (isSameRowOrCellIdx) return 'sudoku-cell--highlighted';
    },
    [currentIndexes, sudoku]
  );

  return { setCellClass };
}
