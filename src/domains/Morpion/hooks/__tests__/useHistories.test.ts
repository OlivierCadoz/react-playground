import { renderHook, act } from '@testing-library/react';
import { useHistories } from '@morpion/hooks/useHistories';
import {
  historiesDefault,
  historiesSingleMove,
  histories2Moves,
} from '@tests/fixtures/histories.fixtures';
import {
  squaresSingleX,
  squares2moves,
  squares3moves,
} from '@tests/fixtures/squares.fixtures';

describe('useHistories', () => {
  describe('When the composable is called', () => {
    test('Then it initialises all histories by default', () => {
      const { result } = renderHook(() => useHistories());

      expect(result.current.histories).toEqual(historiesDefault);
    });
  });

  describe('When setHistories is called after a new move', () => {
    test('Then it saves the new squares in histories', () => {
      const { result } = renderHook(() => useHistories());
      act(() => {
        result.current.setHistories(squaresSingleX);
      });

      expect(result.current.histories).toEqual(historiesSingleMove);
    });
  });

  describe('Given current history index is different from the last item index', () => {
    describe('When setHistories is called', () => {
      test('Then it reasigns a new histories', () => {
        const { result } = renderHook(() => useHistories());
        act(() => {
          result.current.setHistories(squaresSingleX);
        });
        act(() => {
          result.current.setHistories(squares2moves);
        });
        act(() => {
          result.current.setHistories(squares3moves);
          result.current.setHistoryIndex(1);
        });
        act(() => {
          result.current.setHistories(squares2moves);
        });

        expect(result.current.histories).toEqual(histories2Moves);
      });
    });
  });

  describe('Given histories has multiple squares', () => {
    describe('When resetHistories is called', () => {
      test('Then it resets histories by default', () => {
        const { result } = renderHook(() => useHistories());
        act(() => {
          result.current.setHistories(squaresSingleX);
        });
        act(() => {
          result.current.resetHistories();
        });

        expect(result.current.histories).toEqual(historiesDefault);
      });
    });
  });
});
