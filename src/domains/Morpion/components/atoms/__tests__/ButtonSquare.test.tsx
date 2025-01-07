import { render, screen } from '@testing-library/react';
import ButtonSquare from '../ButtonSquare/ButtonSquare';

describe('ButtonSquare component', () => {
  describe('When component is mounted', () => {
    test('Then it renders a button', () => {
      render(<ButtonSquare value={'X'} onSquareClick={() => {}} />);

      const buttonSquareCmp = screen.getByRole('button');
      expect(buttonSquareCmp.textContent).toBe('X');
    });
  });

  describe('Given onSquareClick prop is passed and value is empty', () => {
    describe('When button is clicked', () => {
      test('Then it triggers onSquareClick callback', () => {
        const onSquareClickMock = vi.fn();
        render(<ButtonSquare value={''} onSquareClick={onSquareClickMock} />);

        const buttonSquareCmp = screen.getByRole('button');
        buttonSquareCmp.click();

        expect(onSquareClickMock).toHaveBeenCalled();
      });
    });
  });

  describe('Given onSquareClick prop is passed and value is set to a truthy value', () => {
    describe('When button is clicked', () => {
      test('Then it does nothing', () => {
        const onSquareClickMock = vi.fn();
        render(<ButtonSquare value={'X'} onSquareClick={onSquareClickMock} />);

        const buttonSquareCmp = screen.getByRole('button');
        buttonSquareCmp.click();

        expect(onSquareClickMock).not.toHaveBeenCalled();
      });
    });
  });
});
