import { render, screen, act } from '@testing-library/react';
import Board from '@sudoku/components/organisms/Board';
import {
  mockSolution,
  mockSudoku,
} from '@/tests/fixtures/sudoku/sudoku.fixture';

const useSudokuMock = vi.hoisted(() =>
  vi.fn(() => ({
    sudoku: mockSudoku,
    solution: mockSolution,
  }))
);
vi.mock('@sudoku/hooks/useSudoku', () => ({
  useSudoku: useSudokuMock,
}));

const useFetchSudokuMock = vi.hoisted(() =>
  vi.fn(() => ({
    fetchSudoku: vi.fn(),
    grid: null,
    loading: false,
  }))
);
vi.mock('@sudoku/hooks/useFetchSudoku', () => ({
  useFetchSudoku: useFetchSudokuMock,
}));

vi.mock('@sudoku/hooks/useNumberLeft', () => ({
  useNumberLeft: vi.fn(() => ({
    numbersLeft: []
  }))
}))

describe('Board Component', () => {
  describe.each`
    sudoku        | solution        | loading
    ${null}       | ${null}         | ${true}
    ${mockSudoku} | ${null}         | ${true}
    ${mockSudoku} | ${mockSolution} | ${true}
  `('Given displayGrid is falsy', ({ sudoku, solution, loading }) => {
    vi.mocked(useFetchSudokuMock).mockReturnValueOnce({
      loading,
      fetchSudoku: vi.fn(),
      grid: null,
    });
    vi.mocked(useSudokuMock).mockReturnValueOnce({
      sudoku,
      solution,
    });

    describe('When rendering', () => {
      test('Then sudoku component is hidden', () => {
        render(<Board />);

        expect(screen.queryByTestId('sudoku')).not.toBeInTheDocument();
      });
    });
  });

  describe('Given displayGrid is truthy', () => {
    describe('When rendering', () => {
      test('Then sudoku component is rendered', () => {
        vi.mocked(useSudokuMock).mockReturnValueOnce({
          sudoku: mockSudoku,
          solution: mockSolution,
        });

        render(<Board />);

        expect(screen.queryByTestId('sudoku')).toBeInTheDocument();
      });
    });
  });
});
