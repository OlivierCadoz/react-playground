import { useEffect } from 'react';
import '@sudoku/components/molecules/Sudoku/Sudoku.scss';
import ButtonCell from '@/components/atoms/ButtonCell/ButtonCell';
import { useFetchSudoku } from '@sudoku/hooks/useFetchSudoku';

export default function Sudoku() {
  // const [sudoku, setSudoku] = useState([]);
  const { fetchSudoku, grid, loading } = useFetchSudoku();

  useEffect(() => {
    fetchSudoku();
  }, []);

  return (
    <div className="sudoku">
      <h1>Sudoku</h1>

      <ul className="sudoku-list">
        {grid?.value.map((row, rowIndex) =>
          row.map((cell, cellIndex) => (
            <li key={`${rowIndex} ${cellIndex}`}>
              <ButtonCell value={cell} onCellClick={() => {}} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
