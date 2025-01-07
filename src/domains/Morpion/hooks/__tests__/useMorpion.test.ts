import { renderHook, act } from '@testing-library/react';

import { useMorpion } from '../useMorpion';

import {
  squares2moves,
  squaresEmpty,
  squaresSingleX,
} from '../../../../tests/fixtures/squares.fixtures';
import {
  histories2Moves,
  historiesDefault,
} from '../../../../tests/fixtures/histories.fixtures';

const setHistoriesMock = vi.fn();
const setHistoryIndexMock = vi.fn();
const resetHistoriesMock = vi.fn();
const useHistoriesMock = vi.hoisted(() =>
  vi.fn(() => ({
    histories: [],
    setHistoryIndex: vi.fn(),
    setHistories: vi.fn(),
    resetHistories: vi.fn(),
  }))
);
vi.mock('../useHistories', () => ({
  useHistories: useHistoriesMock,
}));

const useResolveTurnMock = vi.hoisted(() =>
  vi.fn(() => ({
    isXNext: false,
  }))
);
vi.mock('../useResolveTurn', () => ({
  useResolveTurn: useResolveTurnMock,
}));

const useResolveWinnerMock = vi.hoisted(() =>
  vi.fn(() => ({
    winner: '',
    computeWinner: vi.fn(),
  }))
);
vi.mock('../useResolveWinner', () => ({
  useResolveWinner: useResolveWinnerMock,
}));

describe('useMorpion composable', () => {
  describe('When handleHistoryClick is called', () => {
    test('Then it sets squares by previous squares history', () => {
      vi.mocked(useHistoriesMock).mockReturnValueOnce({
        histories: histories2Moves,
        setHistoryIndex: setHistoryIndexMock,
        setHistories: vi.fn(),
        resetHistories: vi.fn(),
      });

      const { result } = renderHook(() => useMorpion());
      act(() => {
        result.current.handleHistoryClick(1);
      });

      expect(result.current.squares).toEqual(squaresSingleX);
      expect(setHistoryIndexMock).toHaveBeenCalledWith(1);
    });
  });

  describe('Given x is the next move', () => {
    describe('When handleSquareClick is called', () => {
      test('Then it sets squares with X', () => {
        vi.mocked(useResolveTurnMock).mockReturnValueOnce({
          isXNext: true,
        });
        vi.mocked(useHistoriesMock).mockReturnValueOnce({
          histories: historiesDefault,
          setHistoryIndex: vi.fn(),
          setHistories: setHistoriesMock,
          resetHistories: vi.fn(),
        });

        const { result } = renderHook(() => useMorpion());
        act(() => {
          result.current.handleSquareClick(0);
        });

        expect(result.current.squares).toEqual(squaresSingleX);
        expect(setHistoriesMock).toHaveBeenCalledWith(squaresSingleX);
      });
    });
  });

  describe('Given o is the next move', () => {
    describe('When handleSquareClick is called', () => {
      test('Then it sets squares with O', () => {
        vi.mocked(useResolveTurnMock).mockReturnValueOnce({
          isXNext: true,
        });
        vi.mocked(useHistoriesMock).mockReturnValueOnce({
          histories: histories2Moves,
          setHistoryIndex: vi.fn(),
          setHistories: setHistoriesMock,
          resetHistories: vi.fn(),
        });

        const { result } = renderHook(() => useMorpion());
        act(() => {
          result.current.handleSquareClick(0);
        });
        act(() => {
          result.current.handleSquareClick(1);
        });

        expect(result.current.squares).toEqual(squares2moves);
        expect(setHistoriesMock).toHaveBeenCalled();
      });
    });
  });

  describe('Given a winner is already determined', () => {
    describe('When handleSquareClick is called', () => {
      test('Then it does nothing', () => {
        vi.mocked(useResolveWinnerMock).mockReturnValueOnce({
          winner: 'X',
        });
        vi.mocked(useHistoriesMock).mockReturnValueOnce({
          histories: historiesDefault,
          setHistoryIndex: vi.fn(),
          setHistories: setHistoriesMock,
          resetHistories: vi.fn(),
        });

        const { result } = renderHook(() => useMorpion());
        act(() => {
          result.current.handleSquareClick(0);
        });

        expect(result.current.squares).toEqual(squaresEmpty);
        expect(setHistoriesMock).not.toHaveBeenCalledWith();
      });
    });
  });

  describe('When handleResetClick is called', () => {
    test('Then it resets squares by default', () => {
      vi.mocked(useHistoriesMock).mockReturnValueOnce({
        histories: histories2Moves,
        setHistoryIndex: vi.fn(),
        setHistories: vi.fn(),
        resetHistories: resetHistoriesMock,
      });

      const { result } = renderHook(() => useMorpion());
      act(() => {
        result.current.handleResetClick();
      });

      expect(result.current.squares).toEqual(squaresEmpty);
      expect(resetHistoriesMock).toHaveBeenCalled();
    });
  });
});
