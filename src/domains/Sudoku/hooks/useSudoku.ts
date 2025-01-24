import { useState, useEffect } from 'react';
import { GridModel, SudokuType } from '@sudoku/models/sudoku.model';
import { deepClone } from '@sudoku/utils';

export function useSudoku(grid: GridModel | null) {
  const [sudoku, setSudoku] = useState<SudokuType | null>(null);
  const [solution, setSolution] = useState<SudokuType | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [isSolved, setIsSolved] = useState<boolean>(false);

  useEffect(() => {
    if (grid) {
      setSudoku(deepClone(grid.value.flat()));
      setSolution(deepClone(grid.solution.flat()));
    }
  }, [grid]);

  function handleCellClick(cellIndex: number) {
    setCurrentIndex(cellIndex);
  }

  function handleValueChange(value: number) {
    const isCurrentCellCorrect =
      sudoku?.[currentIndex] === solution?.[currentIndex];
    if (!sudoku || !solution || isCurrentCellCorrect) return;

    const cellMap = (cell: number, cellIdx: number) =>
      cellIdx === currentIndex ? value : cell;

    const nextSudoku: SudokuType = sudoku.map(cellMap);
    setSudoku(nextSudoku);

    const isSudokuSolved = nextSudoku.every(
      (cell, cellIndex) => cell === solution[cellIndex]
    );
    isSudokuSolved && setIsSolved(true);
  }

  return {
    sudoku,
    solution,
    currentIndex,
    isSolved,
    handleCellClick,
    handleValueChange,
  };
}
