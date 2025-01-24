import { useCallback } from 'react';
import {
  SetCellClassParameters,
  UseCellClassParameters,
} from '@sudoku/models/cellClass.model';

export function useCellClass({
  sudoku,
  solution,
  currentIndexes,
}: UseCellClassParameters) {
  const setCellClass = useCallback(
    ({ cell, rowIndex, cellIndex }: SetCellClassParameters) => {
      const classes = [];
      const [rowIdx, cellIdx] = currentIndexes;
      const isSameRowIdx = rowIndex === rowIdx;
      const isSameCellIdx = cellIndex === cellIdx;
      const isSelectedOrSameValueAsSelected =
        (isSameRowIdx && isSameCellIdx) ||
        (cell && sudoku[rowIdx]?.[cellIdx] === cell);

      if (isSelectedOrSameValueAsSelected)
        classes.push('sudoku-cell--selected');
      else if (isSameRowIdx || isSameCellIdx)
        classes.push('sudoku-cell--highlighted');

      const isCurrentCellWrong =
        sudoku[rowIndex][cellIndex] !== solution[rowIndex][cellIndex];
      if (isCurrentCellWrong) classes.push('sudoku-cell--error');

      return classes.join(' ');
    },
    [currentIndexes, sudoku]
  );

  return { setCellClass };
}
