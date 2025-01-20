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

export default function Sudoku({
  sudoku,
  currentIndexes,
  onCellClick,
}: {
  sudoku: SudokuType;
  currentIndexes: GridIndexesTuple;
  onCellClick: (rowIndex: number, cellIndex: number) => void;
}) {
  function setCellClass({ cell, rowIndex, cellIndex }: SetCellClassParameters) {
    const [rowIdx, cellIdx] = currentIndexes || [-1, -1];
    const sudokuValue = sudoku?.[rowIdx]?.[cellIdx];
    const isSameRowIndex = rowIndex === rowIdx;
    const isSameCellIndex = cellIndex === cellIdx;
    const isSameRowOrCellIndex =
      (isSameRowIndex && !isSameCellIndex) ||
      (!isSameRowIndex && isSameCellIndex);
    const isSelectedOrSameValueAsSelected =
      (isSameRowIndex && isSameCellIndex) || cell && sudokuValue === cell;

    if (isSelectedOrSameValueAsSelected) return 'sudoku-cell--selected';
    if (isSameRowOrCellIndex) return 'sudoku-cell--highlighted';
  }

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
