import { SudokuType, GridModel } from '@sudoku/models/sudoku.model';

export const mockSudoku: SudokuType = [
  1, 0, 7, 0, 8, 9, 0, 0, 4,
  2, 8, 0, 3, 0, 0, 0, 0, 0,
  6, 9, 0, 0, 0, 0, 5, 0, 0,
  0, 7, 0, 0, 3, 0, 0, 0, 2,
  4, 0, 0, 0, 0, 0, 8, 7, 6,
  8, 6, 0, 2, 7, 0, 0, 5, 0,
  7, 0, 0, 0, 9, 8, 3, 0, 5,
  0, 1, 8, 0, 4, 2, 6, 0, 7,
  0, 4, 5, 7, 0, 3, 0, 2, 8,
];

export const mockSolution: SudokuType = [
  1, 5, 7, 6, 8, 9, 2, 3, 4,
  2, 8, 4, 3, 1, 5, 7, 6, 9,
  6, 9, 3, 4, 2, 7, 5, 8, 1,
  5, 7, 9, 8, 3, 6, 4, 1, 2,
  4, 3, 2, 9, 5, 1, 8, 7, 6,
  8, 6, 1, 2, 7, 4, 9, 5, 3,
  7, 2, 6, 1, 9, 8, 3, 4, 5,
  3, 1, 8, 5, 4, 2, 6, 9, 7,
  9, 4, 5, 7, 6, 3, 1, 2, 8,
];

export const mockGrid: GridModel = {
  value: [
    [1, 0, 7, 0, 8, 9, 0, 0, 4],
    [2, 8, 0, 3, 0, 0, 0, 0, 0],
    [6, 9, 0, 0, 0, 0, 5, 0, 0],
    [0, 7, 0, 0, 3, 0, 0, 0, 2],
    [4, 0, 0, 0, 0, 0, 8, 7, 6],
    [8, 6, 0, 2, 7, 0, 0, 5, 0],
    [7, 0, 0, 0, 9, 8, 3, 0, 5],
    [0, 1, 8, 0, 4, 2, 6, 0, 7],
    [0, 4, 5, 7, 0, 3, 0, 2, 8],
  ],
  solution: [
    [1, 5, 7, 6, 8, 9, 2, 3, 4],
    [2, 8, 4, 3, 1, 5, 7, 6, 9],
    [6, 9, 3, 4, 2, 7, 5, 8, 1],
    [5, 7, 9, 8, 3, 6, 4, 1, 2],
    [4, 3, 2, 9, 5, 1, 8, 7, 6],
    [8, 6, 1, 2, 7, 4, 9, 5, 3],
    [7, 2, 6, 1, 9, 8, 3, 4, 5],
    [3, 1, 8, 5, 4, 2, 6, 9, 7],
    [9, 4, 5, 7, 6, 3, 1, 2, 8],
  ],
  difficulty: 'Easy',
};
