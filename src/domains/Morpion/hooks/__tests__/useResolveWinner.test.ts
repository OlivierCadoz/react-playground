import { renderHook } from '@testing-library/react';

import { useResolveWinner } from '@morpion/hooks/useResolveWinner';
import { computeWinner } from '@morpion/utils/winner.utils';
import { squaresEmpty } from '@/tests/fixtures/squares.fixtures';

vi.mock('@morpion/utils/winner.utils', () => ({
  computeWinner: vi.fn(),
}));

describe('useResolveWinner composable', () => {
  describe.each`
    value  | valueLabel
    ${''}  | ${'an empty value'}
    ${'X'} | ${'X'}
  `('Given computeWinner return valueLabel', ({ value }) => {
    describe('When squares parameter changes', () => {
      test('Then winner is set with %p', () => {
        vi.mocked(computeWinner).mockReturnValueOnce(value);

        const { result } = renderHook(() => useResolveWinner(squaresEmpty));

        expect(result.current.winner).toBe(value);
      });
    });
  });
});
