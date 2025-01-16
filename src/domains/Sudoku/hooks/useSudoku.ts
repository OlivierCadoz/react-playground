import { useState, useEffect } from 'react';
import { Grid, Sudoku } from '@sudoku/models/sudoku.model';
import { deepClone } from '@sudoku/utils';

export function useSudoku(grid: Grid | null) {
  console.log("🚀 ~ useSudoku ~ grid:", grid && deepClone(grid.value))
  const [currentValue, setCurrentValue] = useState(1);
  const [sudoku, setSudoku] = useState<Sudoku | null>(null);
  console.log("🚀 ~ useSudoku ~ sudoku:", sudoku)
  // const solution: Sudoku = grid && deepClone(grid.solution);

  useEffect(() => {
    if (grid) {
      setSudoku(deepClone(grid.value));
    }
  }, [grid]);

  const handleCellClick = (rowIndex: number, cellIndex: number) => {
    const clone: Sudoku = deepClone(sudoku!);

    const cellMap = (cell: number, cellIdx: number) => {
      if (cellIdx === cellIndex) return currentValue;
      return cell;
    };

    const rowMap = (row: number[], rowIdx: number) => {
      if (rowIdx === rowIndex) return row.map(cellMap);
      return row;
    }

    const nextSudoku = clone.map(rowMap);

    setSudoku(nextSudoku);
  };

  return { sudoku, handleCellClick };
}
