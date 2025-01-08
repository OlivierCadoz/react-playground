import { render, screen } from '@testing-library/react';
import Histories from '@morpion/components/molecules/Histories';
import { histories2Moves } from '@/tests/fixtures/histories.fixtures';

describe('Histories component', () => {
  describe('Given there is hitories listed', () => {
    describe('When component is mounted', () => {
      test('then it renders a list', () => {
        render(
          <Histories
            histories={histories2Moves}
            handleHistoryClick={() => {}}
          />
        );

        const historyItems = screen.getAllByRole('listitem');
        expect(historyItems).toHaveLength(3);
        expect(historyItems[0].textContent).toContain('Revenir au début');
        expect(historyItems[1].textContent).toContain('Coup n°1');
        expect(historyItems[2].textContent).toContain('Coup n°2');
      });
    });
  });

  describe('When a button item is clicked', () => {
    test.each([0, 1, 2])(
      'then it triggers handleHistoryClick callback',
      (index: number) => {
        const handleHistoryClickMock = vi.fn();
        render(
          <Histories
            histories={histories2Moves}
            handleHistoryClick={handleHistoryClickMock}
          />
        );

        const historyItems = screen.getAllByRole('button');
        historyItems[index].click();

        expect(handleHistoryClickMock).toHaveBeenCalledWith(index);
      }
    );
  });
});
