import { renderHook } from '@testing-library/react';

import { useResolveWinner } from '../useResolveWinner';

import { computeWinner } from '../../utils/winner.utils';
import { squaresEmpty } from '../../../../tests/fixtures/squares.fixtures';

vi.mock('../../utils/winner.utils', () => ({
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
