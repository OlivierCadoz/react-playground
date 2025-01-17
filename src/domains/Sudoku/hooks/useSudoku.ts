import { useState, useEffect } from 'react';
import { GridModel, SudokuType } from '@sudoku/models/sudoku.model';
import { deepClone } from '@sudoku/utils';

export function useSudoku(grid: GridModel | null) {
  const [currentIndexes, setCurrentIndexes] = useState([-1, -1]);
  const [sudoku, setSudoku] = useState<SudokuType | null>(null);

  useEffect(() => {
    grid && setSudoku(deepClone(grid.value));
  }, [grid]);

  function handleCellClick(rowIndex: number, cellIndex: number) {
    setCurrentIndexes([rowIndex, cellIndex]);
  }

  function handleValueChange(value: number) {
    const clone: SudokuType = deepClone(sudoku!);
    const [rowIndex, cellIndex] = currentIndexes;

    const cellMap = (cell: number, cellIdx: number) =>
      cellIdx === cellIndex ? value : cell;

    const rowMap = (row: number[], rowIdx: number) =>
      rowIdx === rowIndex ? row.map(cellMap) : row;

    const nextSudoku = clone.map(rowMap);
    setSudoku(nextSudoku);
  }

  return { sudoku, handleCellClick, handleValueChange };
}
