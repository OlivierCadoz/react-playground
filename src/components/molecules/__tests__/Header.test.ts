import { render, screen } from '@testing-library/react';

import Header from '@components/molecules/Header';

describe('Header component', () => {
  describe('Given there is squares listed', () => {
    describe('When component is mounted', () => {
      test('then it renders a list', () => {
        render(<Header />);

        const squareItems = screen.getAllByRole('listitem');
        expect(squareItems).toHaveLength(3);
      });
    });
  });
});
