import { render, screen } from '@testing-library/react';
import ButtonCell from '@/components/atoms/ButtonCell/ButtonCell';

describe('ButtonCell component', () => {
  describe('When component is mounted', () => {
    test('Then it renders a button', () => {
      render(<ButtonCell value={'X'} onCellClick={() => {}} />);

      const ButtonCellCmp = screen.getByRole('button');
      expect(ButtonCellCmp.textContent).toBe('X');
    });
  });

  describe('Given onCellClick prop is passed', () => {
    describe('When button is clicked', () => {
      test('Then it triggers onCellClick callback', () => {
        const onCellClickMock = vi.fn();
        render(<ButtonCell value={''} onCellClick={onCellClickMock} />);

        const ButtonCellCmp = screen.getByRole('button');
        ButtonCellCmp.click();

        expect(onCellClickMock).toHaveBeenCalled();
      });
    });
  });
});
