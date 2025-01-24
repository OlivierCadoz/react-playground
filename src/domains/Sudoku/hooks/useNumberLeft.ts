import { useState, useEffect } from 'react';
import { SudokuType } from '@sudoku/models/sudoku.model';

export function useNumberLeft(
  sudoku: SudokuType | null,
  solution: SudokuType | null
) {
  const [numbersLeft, setNumbersLeft] = useState<number[]>(Array(9).fill(0));

  useEffect(() => {
    const nbrsLeft: number[] = Array(9).fill(0);

    solution &&
      sudoku?.forEach((cell, cellIndex) => {
        const solutionCell = solution[cellIndex];
        if (!cell || solutionCell !== sudoku[cellIndex]) {
          const currentIndex = solutionCell - 1;
          nbrsLeft[currentIndex] = nbrsLeft[currentIndex] + 1;
        }
      });

    setNumbersLeft(nbrsLeft);
  }, [sudoku, solution]);

  return { numbersLeft };
}
