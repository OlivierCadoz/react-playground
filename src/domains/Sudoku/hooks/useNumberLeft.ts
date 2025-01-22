import { useState, useEffect } from 'react';
import { SudokuType } from '@sudoku/models/sudoku.model';

export function useNumberLeft(sudoku: SudokuType, solution: SudokuType) {
  const [numbersLeft, setNumbersLeft] = useState(Array(9).fill(0));

  useEffect(() => {
    const nbrsLeft = Array(9).fill(0);

    sudoku?.forEach((row, rowIndex) =>
      row.forEach((cell, cellIndex) => {
        if (!cell) {
          const solutionCell = solution[rowIndex][cellIndex];
          const currentIndex = solutionCell - 1;
          nbrsLeft[currentIndex] = nbrsLeft[currentIndex] + 1;
        }
      })
    );

    setNumbersLeft(nbrsLeft);
  }, [sudoku, solution]);

  return { numbersLeft };
}
