import '@sudoku/components/molecules/Sudoku/Sudoku.scss';
import ButtonCell from '@/components/atoms/ButtonCell/ButtonCell';
import { SudokuType } from '@/domains/Sudoku/models/sudoku.model';

export default function Sudoku({
  sudoku,
  currentIndexes,
  onCellClick,
}: {
  sudoku: SudokuType;
  currentIndexes: [number, number];
  onCellClick: (rowIndex: number, cellIndex: number) => void;
}) {
  function setCellClass(rowIndex: number, cellIndex: number) {
    const [rowIdx, cellIdx] = currentIndexes || [-1, -1];
    const isSameRowIndex = rowIndex === rowIdx;
    const isSameCellIndex = cellIndex === cellIdx;
    const isSameRowOrCellIndex =
      (isSameRowIndex && !isSameCellIndex) ||
      (!isSameRowIndex && isSameCellIndex);

    if (isSameRowIndex && isSameCellIndex) return 'sudoku-cell--selected';
    if (isSameRowOrCellIndex) return 'sudoku-cell--highlighted';
  }

  return (
    <ul className="sudoku-list">
      {sudoku.map((row, rowIndex) =>
        row.map((cell, cellIndex) => (
          <li
            key={`${rowIndex}-${cellIndex}`}
            className={`sudoku-cell ${setCellClass(rowIndex, cellIndex)}`}
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
