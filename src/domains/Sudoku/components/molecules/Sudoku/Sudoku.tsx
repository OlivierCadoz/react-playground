import { useEffect } from 'react';
import '@sudoku/components/molecules/Sudoku/Sudoku.scss';
import ButtonCell from '@/components/atoms/ButtonCell/ButtonCell';
import { useFetchSudoku } from '@sudoku/hooks/useFetchSudoku';
import ButtonCommon from '@/components/atoms/ButtonCommon';

export default function Sudoku() {
  const { fetchSudoku, grid, loading } = useFetchSudoku();
  const displayGrid = grid && !loading;

  useEffect(() => {
    fetchSudoku();
  }, []);

  return (
    <div className="sudoku">
      <h1>Sudoku</h1>

      <ButtonCommon onClickEvent={fetchSudoku} disabled={loading}>
        Reset
      </ButtonCommon>

      {displayGrid ? (
        <ul className="sudoku-list">
          {grid?.value.map((row, rowIndex) =>
            row.map((cell, cellIndex) => (
              <li key={`${rowIndex} ${cellIndex}`}>
                <ButtonCell value={cell || ''} onCellClick={() => {}} />
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
