import { useEffect } from 'react';
import '@sudoku/components/molecules/Sudoku/Sudoku.scss';
import ButtonCommon from '@/components/atoms/ButtonCommon';
import Sudoku from '@sudoku/components/molecules/Sudoku/Sudoku';
import NumericPad from '@sudoku/components/molecules/NumericPad/NumericPad';
import { useFetchSudoku } from '@sudoku/hooks/useFetchSudoku';
import { useSudoku } from '@sudoku/hooks/useSudoku';

export default function Board() {
  const { fetchSudoku, grid, loading } = useFetchSudoku();
  const { sudoku, handleCellClick, handleValueChange } = useSudoku(grid);
  const displayGrid = sudoku && !loading;

  useEffect(() => fetchSudoku(), []);

  return (
    <section className="sudoku">
      <h1>Sudoku</h1>

      <ButtonCommon onClickEvent={fetchSudoku} disabled={loading}>
        Reset
      </ButtonCommon>

      {displayGrid ? (
        <Sudoku sudoku={sudoku} onCellClick={handleCellClick} />
      ) : (
        <p>Loading...</p>
      )}

      <NumericPad onNumberClick={handleValueChange} />
    </section>
  );
}
