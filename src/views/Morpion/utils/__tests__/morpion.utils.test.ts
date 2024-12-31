import { initSquares } from '../morpion.utils';
import { squaresEmpty } from '../../../../tests/fixtures/squares.fixtures';

describe('initSquares function', () => {
  test('it returns an array of length 9 and filled with empty string', () => {
    expect(initSquares()).toEqual(squaresEmpty);
  });
});
