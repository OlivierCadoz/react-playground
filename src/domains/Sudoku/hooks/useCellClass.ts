import { useCallback } from 'react';
import {
  SetCellClassParameters,
  UseCellClassParameters,
} from '@sudoku/models/cellClass.model';
import { rows, columns, blocs } from '@sudoku/constants/Indexes';

const isIndexInArray = (indexArray: number[]) => (index: number) =>
  indexArray.some((idx) => index === idx);

const isIndexInArrayAsSelected =
  (cellIndex: number, currentIndex: number) => (indexArray: number[]) => {
    const isIndexIncluded = isIndexInArray(indexArray);
    return isIndexIncluded(cellIndex) && isIndexIncluded(currentIndex);
  };

const shouldHighlight = (cellIndex: number, currentIndex: number) => {
  const isIndexAlsoIncluded = isIndexInArrayAsSelected(cellIndex, currentIndex);
  return [rows, columns, blocs].some((indexArrays) =>
    indexArrays.some(isIndexAlsoIncluded)
  );
};

export function useCellClass({
  sudoku,
  solution,
  currentIndex,
}: UseCellClassParameters) {
  const setCellClass = useCallback(
    ({ cell, cellIndex }: SetCellClassParameters) => {
      const classes = [];
      const selectedOrSameValueAsSelected =
        cellIndex === currentIndex || (cell && sudoku[currentIndex] === cell);
      const highlight = shouldHighlight(cellIndex, currentIndex);

      if (selectedOrSameValueAsSelected) classes.push('sudoku-cell--selected');
      else if (highlight) classes.push('sudoku-cell--highlighted');

      const cellWrong = sudoku[cellIndex] !== solution[cellIndex];
      if (cellWrong) classes.push('sudoku-cell--error');

      return classes.join(' ');
    },
    [currentIndex, sudoku]
  );

  return { setCellClass };
}
