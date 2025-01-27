export type SudokuType = number[];

type DifficultyType = 'Easy' | 'Medium' | 'Hard';

export interface GridModel {
  value: SudokuType[];
  solution: SudokuType[];
  difficulty: DifficultyType;
}

export interface SudokuDataModel {
  newboard: {
    grids: GridModel[];
    results: number;
    message: string;
  };
}
