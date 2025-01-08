import { computeWinner } from '@morpion/utils/winner.utils';
import {
  squaresEmpty,
  squaresLinesCompleted,
  squaresWithX,
  squaresWithO,
} from '@/tests/fixtures/squares.fixtures';

describe('computeWinner function', () => {
  describe('Given no line is completed with same value', () => {
    describe('When the function is called', () => {
      test('Then it returns an empty string', () => {
        expect(computeWinner(squaresEmpty)).toBe('');
      });
    });
  });

  describe.each`
    squares                     | line
    ${squaresLinesCompleted[0]} | ${'first'}
    ${squaresLinesCompleted[1]} | ${'second'}
    ${squaresLinesCompleted[2]} | ${'third'}
    ${squaresLinesCompleted[3]} | ${'fourth'}
    ${squaresLinesCompleted[4]} | ${'fifth'}
    ${squaresLinesCompleted[5]} | ${'sixth'}
    ${squaresLinesCompleted[6]} | ${'seventh'}
    ${squaresLinesCompleted[7]} | ${'eighth'}
  `('Given $line line is completed with same value', ({ squares }) => {
    describe('When the function is called', () => {
      test('Then it returns a string containing the value', () => {
        expect(computeWinner(squares)).toBe('X');
      });
    });
  });

  describe.each`
    squares         | expected
    ${squaresWithX} | ${'X'}
    ${squaresWithO} | ${'O'}
  `('Given a line is completed with $expected', ({ squares, expected }) => {
    describe('When the function is called', () => {
      test('Then it returns a string containing the value $expected', () => {
        expect(computeWinner(squares)).toBe(expected);
      });
    });
  });
});
