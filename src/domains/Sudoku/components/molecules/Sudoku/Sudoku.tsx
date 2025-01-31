import '@sudoku/components/molecules/Sudoku/Sudoku.scss';
import ButtonCell from '@/components/atoms/ButtonCell/ButtonCell';
import { SudokuType } from '@/domains/Sudoku/models/sudoku.model';
import { useCellClass } from '@/domains/Sudoku/hooks/useCellClass';

interface SudokuProps {
  sudoku: SudokuType;
  solution: SudokuType;
  currentIndex: number;
  onCellClick: (cellIndex: number) => void;
}

export default function Sudoku({
  sudoku,
  solution,
  currentIndex,
  onCellClick,
}: SudokuProps) {
  const { setCellClass } = useCellClass({ sudoku, solution, currentIndex });

  return (
    <ul className="sudoku-list" data-testid="sudoku">
      {sudoku.map((cell, cellIndex) => (
        <li
          key={cellIndex}
          className={`sudoku-cell ${setCellClass({
            cell,
            cellIndex,
          })}`}
        >
          <ButtonCell
            value={cell || ''}
            onCellClick={() => onCellClick(cellIndex)}
          />
        </li>
      ))}
    </ul>
  );
}
