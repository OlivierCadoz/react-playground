import { useEffect } from 'react';
import '@sudoku/components/molecules/Sudoku/Sudoku.scss';
import ButtonCommon from '@/components/atoms/ButtonCommon';
import Sudoku from '@sudoku/components/molecules/Sudoku/Sudoku';
import NumericPad from '@sudoku/components/molecules/NumericPad/NumericPad';
import { useFetchSudoku } from '@sudoku/hooks/useFetchSudoku';
import { useSudoku } from '@sudoku/hooks/useSudoku';
import { useNumberLeft } from '@sudoku/hooks/useNumberLeft';

export default function Board() {
  const { fetchSudoku, grid, loading } = useFetchSudoku();
  const { sudoku, solution, currentIndexes, handleCellClick, handleValueChange } =
    useSudoku(grid);
  const { numbersLeft } = useNumberLeft(sudoku!, solution!);
  const displayGrid = sudoku && !loading;

  useEffect(() => fetchSudoku(), []);

  return (
    <section className="sudoku">
      <h1>Sudoku</h1>

      <ButtonCommon onClickEvent={fetchSudoku} disabled={loading}>
        Reset
      </ButtonCommon>

      {displayGrid ? (
        <Sudoku
          sudoku={sudoku}
          solution={solution!}
          currentIndexes={currentIndexes}
          onCellClick={handleCellClick}
        />
      ) : (
        <p>Loading...</p>
      )}

      <NumericPad numbersLeft={numbersLeft} onNumberClick={handleValueChange} />
    </section>
  );
}
