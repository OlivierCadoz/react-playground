import { useState, useEffect } from 'react';
import { GridIndexesTuple, GridModel, SudokuType } from '@sudoku/models/sudoku.model';
import { deepClone } from '@sudoku/utils';

export function useSudoku(grid: GridModel | null) {
  const [currentIndexes, setCurrentIndexes] = useState<GridIndexesTuple>([
    -1, -1,
  ]);
  const [sudoku, setSudoku] = useState<SudokuType | null>(null);
  const [solution, setSolution] = useState<SudokuType | null>(null);

  useEffect(() => {
    if (grid) {
      setSudoku(deepClone(grid.value));
      setSolution(deepClone(grid.solution));
    }
  }, [grid]);

  function handleCellClick(rowIndex: number, cellIndex: number) {
    setCurrentIndexes([rowIndex, cellIndex]);
  }

  function handleValueChange(value: number) {
    const [rowIndex, cellIndex] = currentIndexes;
    const clone: SudokuType = deepClone(sudoku!);
    const isCurrentCellCorrect =
      clone[rowIndex][cellIndex] === solution![rowIndex][cellIndex];

    if (isCurrentCellCorrect) return;

    const cellMap = (cell: number, cellIdx: number) =>
      cellIdx === cellIndex ? value : cell;

    const rowMap = (row: number[], rowIdx: number) =>
      rowIdx === rowIndex ? row.map(cellMap) : row;

    const nextSudoku = clone.map(rowMap);
    setSudoku(nextSudoku);
  }

  return {
    sudoku,
    currentIndexes,
    handleCellClick,
    handleValueChange,
  };
}
