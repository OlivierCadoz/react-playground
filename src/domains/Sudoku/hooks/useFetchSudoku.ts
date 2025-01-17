import { useState } from 'react';
import { GridModel, SudokuDataModel } from '@sudoku/models/sudoku.model';
import { gridDev } from '@sudoku/constants/sudokuForDev';

export function useFetchSudoku() {
  const [grid, setGrid] = useState<GridModel | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchSudoku = () => {
  setGrid(gridDev);
    // setLoading(true);
    // fetch('https://sudoku-api.vercel.app/api/dosuku')
    //   .then(async (data) => {
    //     const json: SudokuDataModel = await data.json();
    //     const grid = json.newboard.grids.shift() ?? null;
    //     setGrid(grid);
    //   })
    //   .finally(() => setLoading(false));
  };

  return { fetchSudoku, grid, loading };
}
