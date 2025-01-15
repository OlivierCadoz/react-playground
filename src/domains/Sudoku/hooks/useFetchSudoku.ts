import { useState } from 'react';
import { Grid, SudokuData } from '@sudoku/models/sudoku.model';

export function useFetchSudoku() {
  const [grid, setGrid] = useState<Grid | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchSudoku = () => {
    // setLoading(true);
    fetch('https://sudoku-api.vercel.app/api/dosuku')
      .then(async (data) => {
        const json: SudokuData = await data.json();
        const grid = json.newboard.grids.shift() ?? null;
        setGrid(grid);
      })
      // .finally(() => setLoading(false));
  };

  return { fetchSudoku, grid, loading };
}
