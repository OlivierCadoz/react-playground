import { renderHook } from '@testing-library/react';

import { useResolveTurn } from '@morpion/hooks/useResolveTurn';
import { squaresEmpty, squaresWithX } from '@tests/fixtures/squares.fixtures';

describe('useResolveTurn composable', () => {
  describe.each`
  squares         | expected | evenOdd
  ${squaresEmpty} | ${true}  | ${'even'}
  ${squaresWithX} | ${false} | ${'odd'}
  `('Given squares array length is $evenOdd', ({ squares, expected }) => {
    describe('When squares parameter changes', () => {
      test('Then isXNext is set at false', () => {
        const { result } = renderHook(() => useResolveTurn(squares));

        expect(result.current.isXNext).toBe(expected);
      });
    });
  });
});