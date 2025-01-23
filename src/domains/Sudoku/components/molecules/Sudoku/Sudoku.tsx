import '@sudoku/components/molecules/Sudoku/Sudoku.scss';
import ButtonCell from '@/components/atoms/ButtonCell/ButtonCell';
import {
  GridIndexesTuple,
  SudokuType,
} from '@/domains/Sudoku/models/sudoku.model';
import { useCellClass } from '@/domains/Sudoku/hooks/useCellClass';

interface SudokuProps {
  sudoku: SudokuType;
  solution: SudokuType;
  currentIndexes: GridIndexesTuple;
  onCellClick: (rowIndex: number, cellIndex: number) => void;
}

export default function Sudoku({
  sudoku,
  solution,
  currentIndexes,
  onCellClick,
}: SudokuProps) {
  const { setCellClass } = useCellClass({ sudoku, solution, currentIndexes });

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
