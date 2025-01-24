import { SudokuType } from '@sudoku/models/sudoku.model';

export interface SetCellClassParameters {
  cell: number;
  cellIndex: number;
}

export interface UseCellClassParameters {
  sudoku: SudokuType;
  solution: SudokuType;
  currentIndex: number;
}
