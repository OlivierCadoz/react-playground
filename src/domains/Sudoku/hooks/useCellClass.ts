import { useCallback } from 'react';
import {
  SetCellClassParameters,
  UseCellClassParameters,
} from '@sudoku/models/cellClass.model';
import { rows, columns, blocs } from '@sudoku/constants/indexes';

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
      const selected = cellIndex === currentIndex;
      const sameValAsSelected = cell && sudoku[currentIndex] === cell;
      const highlight = shouldHighlight(cellIndex, currentIndex);

      if (selected || sameValAsSelected) classes.push('selected');
      else if (highlight) classes.push('highlighted');

      const cellWrong = cell && cell !== solution[cellIndex];
      if (cellWrong) classes.push('error');

      return classes.map((val) => `sudoku-cell--${val}`).join(' ');
    },
    [currentIndex, sudoku]
  );

  return { setCellClass };
}
