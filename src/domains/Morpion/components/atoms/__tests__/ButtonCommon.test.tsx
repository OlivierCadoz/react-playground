import { render, screen } from '@testing-library/react';
import ButtonCommon from '../ButtonCommon';

describe('ButtonCommon component', () => {
  describe('When component is mounted', () => {
    test('Then it renders a button', () => {
      render(<ButtonCommon onClickEvent={() => {}}>Some text</ButtonCommon>);

      const buttonCommonCmp = screen.getByRole('button');
      expect(buttonCommonCmp.textContent).toBe('Some text');
    });
  });

  describe('Given onClickEvent prop is passed', () => {
    describe('When button is clicked', () => {
      test('Then it triggers onClickEvent callback', () => {
        const onClickEventMock = vi.fn();
        render(
          <ButtonCommon onClickEvent={onClickEventMock}>Some text</ButtonCommon>
        );

        const buttonCommonCmp = screen.getByRole('button');
        buttonCommonCmp.click();

        expect(onClickEventMock).toHaveBeenCalled();
      });
    });
  });
});
