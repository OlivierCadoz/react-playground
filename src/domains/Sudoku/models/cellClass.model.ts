import { GridIndexesTuple, SudokuType } from '@sudoku/models/sudoku.model';

export interface SetCellClassParameters {
  cell: number;
  rowIndex: number;
  cellIndex: number;
}

export interface UseCellClassParameters {
  sudoku: SudokuType;
  currentIndexes: GridIndexesTuple;
}