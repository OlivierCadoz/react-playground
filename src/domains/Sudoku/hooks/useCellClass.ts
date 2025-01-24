import { useCallback } from 'react';
import {
  SetCellClassParameters,
  UseCellClassParameters,
} from '@sudoku/models/cellClass.model';
import { blocs } from '@sudoku/constants/Indexes';

const isSomeSameIndex = (bloc: number[]) => (index: number) =>
  bloc.some((idx) => index === idx);

const isSameBloc = (currentIndex: number, itemIndex: number) =>
  blocs.some(
    (bloc) =>
      isSomeSameIndex(bloc)(currentIndex) && isSomeSameIndex(bloc)(itemIndex)
  );

export function useCellClass({
  sudoku,
  solution,
  currentIndexes,
}: UseCellClassParameters) {
  const getItemIndex = (rowIndex: number, cellIndex: number) =>
    rowIndex * 8 + rowIndex + cellIndex;

  const setCellClass = useCallback(
    ({ cell, rowIndex, cellIndex, itemIndex }: SetCellClassParameters) => {
      const classes = [];
      const [rowIdx, cellIdx] = currentIndexes;
      const sameRowIdx = rowIndex === rowIdx;
      const sameCellIdx = cellIndex === cellIdx;
      const selectedOrSameValueAsSelected =
        (sameRowIdx && sameCellIdx) ||
        (cell && sudoku[rowIdx]?.[cellIdx] === cell);
      const currentItemIndex = getItemIndex(rowIdx, cellIdx);
      const sameBloc = isSameBloc(currentItemIndex, itemIndex);

      if (selectedOrSameValueAsSelected) classes.push('sudoku-cell--selected');
      else if (sameRowIdx || sameCellIdx || sameBloc)
        classes.push('sudoku-cell--highlighted');

      const cellWrong =
        sudoku[rowIndex][cellIndex] !== solution[rowIndex][cellIndex];
      if (cellWrong) classes.push('sudoku-cell--error');

      return classes.join(' ');
    },
    [currentIndexes, sudoku]
  );

  return { setCellClass, getItemIndex };
}
