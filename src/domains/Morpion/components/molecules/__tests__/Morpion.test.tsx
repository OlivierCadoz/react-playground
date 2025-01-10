import { render, screen } from '@testing-library/react';
import Morpion from '@morpion/components/molecules/Morpion/Morpion';
import {
  squares3moves,
  squaresEmpty,
} from '@tests/fixtures/squares.fixtures';

describe('Morpion component', () => {
  describe('Given there is squares listed', () => {
    describe('When component is mounted', () => {
      test('then it renders a list', () => {
        render(<Morpion squares={squaresEmpty} handleSquareClick={() => {}} />);

        const squareItems = screen.getAllByRole('listitem');
        expect(squareItems).toHaveLength(9);
      });
    });
  });

  describe('Given square is empty', () => {
    describe('When a button item is clicked', () => {
      test.each([0, 1, 2])(
        'then it triggers handleSquareClick callback',
        (index: number) => {
          const handleSquareClickMock = vi.fn();
          render(
            <Morpion
              squares={squaresEmpty}
              handleSquareClick={handleSquareClickMock}
            />
          );

          const squareItems = screen.getAllByRole('button');
          squareItems[index].click();

          expect(handleSquareClickMock).toHaveBeenCalledWith(index);
        }
      );
    });
  });

  describe('Given square is set to a truthy value', () => {
    describe('When a button item is clicked', () => {
      test.each([0, 1, 2])('then it does nothing', (index: number) => {
        const handleSquareClickMock = vi.fn();
        render(
          <Morpion
            squares={squares3moves}
            handleSquareClick={handleSquareClickMock}
          />
        );

        const squareItems = screen.getAllByRole('button');
        squareItems[index].click();

        expect(handleSquareClickMock).not.toHaveBeenCalledWith(index);
      });
    });
  });
});
