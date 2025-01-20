import { useCallback } from 'react';
import '@sudoku/components/molecules/Sudoku/Sudoku.scss';
import ButtonCell from '@/components/atoms/ButtonCell/ButtonCell';
import {
  GridIndexesTuple,
  SudokuType,
} from '@/domains/Sudoku/models/sudoku.model';

interface SetCellClassParameters {
  cell: number;
  rowIndex: number;
  cellIndex: number;
}

interface SudokuProps {
  sudoku: SudokuType;
  currentIndexes: GridIndexesTuple;
  onCellClick: (rowIndex: number, cellIndex: number) => void;
}

export default function Sudoku({
  sudoku,
  currentIndexes,
  onCellClick,
}: SudokuProps) {
  const setCellClass = useCallback(
    ({ cell, rowIndex, cellIndex }: SetCellClassParameters) => {
      const [rowIdx, cellIdx] = currentIndexes || [-1, -1];
      const sudokuValue = sudoku?.[rowIdx]?.[cellIdx];
      const isSameRowIdx = rowIndex === rowIdx;
      const isSameCellIdx = cellIndex === cellIdx;
      const isSameRowOrCellIdx =
        (isSameRowIdx && !isSameCellIdx) || (!isSameRowIdx && isSameCellIdx);
      const isSelectedOrSameValueAsSelected =
        (isSameRowIdx && isSameCellIdx) || (cell && sudokuValue === cell);

      if (isSelectedOrSameValueAsSelected) return 'sudoku-cell--selected';
      if (isSameRowOrCellIdx) return 'sudoku-cell--highlighted';
    },
    [currentIndexes]
  );

  return (
    <ul className="sudoku-list">
      {sudoku.map((row, rowIndex) =>
        row.map((cell, cellIndex) => (
          <li
            key={`${rowIndex}-${cellIndex}`}
            className={`sudoku-cell ${setCellClass({
              cell,
              rowIndex,
              cellIndex,
            })}`}
          >
            <ButtonCell
              value={cell || ''}
              onCellClick={() => onCellClick(rowIndex, cellIndex)}
            />
          </li>
        ))
      )}
    </ul>
  );
}
