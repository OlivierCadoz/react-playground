import { render, screen } from '@testing-library/react';
import ButtonSquare from '@components/atoms/ButtonSquare/ButtonSquare';

describe('ButtonSquare component', () => {
  describe('When component is mounted', () => {
    test('Then it renders a button', () => {
      render(<ButtonSquare value={'X'} onSquareClick={() => {}} />);

      const buttonSquareCmp = screen.getByRole('button');
      expect(buttonSquareCmp.textContent).toBe('X');
    });
  });

  describe('Given onSquareClick prop is passed', () => {
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
});
