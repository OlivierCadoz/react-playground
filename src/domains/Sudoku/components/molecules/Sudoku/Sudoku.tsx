import '@sudoku/components/molecules/Sudoku/Sudoku.scss';
import ButtonCell from '@/components/atoms/ButtonCell/ButtonCell';
import { SudokuType } from '@/domains/Sudoku/models/sudoku.model';

export default function Sudoku({ sudoku, onCellClick }: { sudoku: SudokuType; onCellClick: (rowIndex: number, cellIndex: number) => void }) {
  return (
    <ul className="sudoku-list">
      {sudoku.map((row, rowIndex) =>
        row.map((cell, cellIndex) => (
          <li key={`${rowIndex} ${cellIndex}`}>
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
