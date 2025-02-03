import { useEffect } from 'react';
import '@sudoku/components/organisms/Board/Board.scss';
import ButtonCommon from '@/components/atoms/ButtonCommon';
import Sudoku from '@sudoku/components/molecules/Sudoku/Sudoku';
import NumericPad from '@sudoku/components/molecules/NumericPad/NumericPad';
import { useFetchSudoku } from '@sudoku/hooks/useFetchSudoku';
import { useSudoku } from '@sudoku/hooks/useSudoku';
import { useNumberLeft } from '@sudoku/hooks/useNumberLeft';

export default function Board() {
  const { fetchSudoku, grid, loading } = useFetchSudoku();
  const {
    sudoku,
    solution,
    currentIndex,
    isSolved,
    handleCellClick,
    handleValueChange,
  } = useSudoku(grid);
  const { numbersLeft } = useNumberLeft(sudoku, solution);
  const displayGrid = sudoku && solution && !loading;

  useEffect(() => fetchSudoku(), []);

  return (
    <section className="board">
      <h1 className='sr-only'>Sudoku</h1>

      <ButtonCommon className={'board__reset-btn'} onClickEvent={fetchSudoku} disabled={loading}>
        Nouvelle Partie
      </ButtonCommon>

      {displayGrid ? (
        <Sudoku
          sudoku={sudoku}
          solution={solution}
          currentIndex={currentIndex}
          onCellClick={handleCellClick}
        />
      ) : (
        <p>Loading...</p>
      )}

      <NumericPad numbersLeft={numbersLeft} onNumberClick={handleValueChange} />

      {isSolved && <p>Well done!</p>}
    </section>
  );
}
