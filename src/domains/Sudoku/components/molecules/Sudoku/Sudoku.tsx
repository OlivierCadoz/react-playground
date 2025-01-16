import { useEffect } from 'react';
import '@sudoku/components/molecules/Sudoku/Sudoku.scss';
import ButtonCell from '@/components/atoms/ButtonCell/ButtonCell';
import ButtonCommon from '@/components/atoms/ButtonCommon';
import { useFetchSudoku } from '@sudoku/hooks/useFetchSudoku';
import { useSudoku } from '@sudoku/hooks/useSudoku';

export default function Sudoku() {
  const { fetchSudoku, grid, loading } = useFetchSudoku();
  const { sudoku, handleCellClick } = useSudoku(grid);
  const displayGrid = sudoku && !loading;

  useEffect(() => fetchSudoku(), []);

  return (
    <div className="sudoku">
      <h1>Sudoku</h1>

      <ButtonCommon onClickEvent={fetchSudoku} disabled={loading}>
        Reset
      </ButtonCommon>

      {displayGrid ? (
        <ul className="sudoku-list">
          {sudoku.map((row, rowIndex) =>
            row.map((cell, cellIndex) => (
              <li key={`${rowIndex} ${cellIndex}`}>
                <ButtonCell
                  value={cell || ''}
                  onCellClick={() => handleCellClick(rowIndex, cellIndex)}
                />
              </li>
            ))
          )}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
