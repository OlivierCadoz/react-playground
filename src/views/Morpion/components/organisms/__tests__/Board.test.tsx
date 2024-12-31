import { render, screen } from '@testing-library/react';
import Board from '../Board';

const useMorpionMock = vi.hoisted(() =>
  vi.fn(() => ({
    winner: '',
    squares: [],
    histories: [],
  }))
);

vi.mock('../../../hooks/useMorpion.ts', () => ({
  useMorpion: useMorpionMock,
}));

describe('Board component', () => {
  describe('Given a winner is determined', () => {
    describe('When rendering the component', () => {
      test('Then a text declaring the winner exists', () => {
        vi.mocked(useMorpionMock).mockReturnValueOnce({
          winner: 'X',
          squares: [],
          histories: [],
        });

        render(<Board />);

        const winnerP = screen.getByRole('paragraph');
        expect(winnerP).toHaveTextContent('Winner: X');
      });
    });
  });

  describe('Given a winner is missing', () => {
    describe('When rendering the component', () => {
      test('Then a text declaring the winner is missing', () => {
        vi.mocked(useMorpionMock).mockReturnValueOnce({
          winner: '',
          squares: [],
          histories: [],
        });

        render(<Board />);

        const winnerP = screen.queryByText('Winner: X');
        expect(winnerP).not.toBeInTheDocument();
      });
    });
  });
});
