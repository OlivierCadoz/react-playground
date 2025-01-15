export type Sudoku = number[][];

type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Grid {
  value: Sudoku;
  solution: Sudoku;
  difficulty: Difficulty;
}

export interface SudokuData {
  newboard: {
    grids: Grid[];
    results: number;
    message: string;
  };
}
