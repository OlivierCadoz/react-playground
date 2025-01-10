import { screen } from '@testing-library/react';

import Routes from '@routes';

import { renderWithRouter } from '@tests/utils/test.tsx';

describe('Routes', () => {
  test('renders home page at "/"', () => {
    renderWithRouter(<Routes />);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  test('renders morpion page at "/morpion"', () => {
    renderWithRouter(<Routes />, { route: '/morpion' });
    expect(screen.getByTestId('morpion')).toBeInTheDocument();
  });

  test('renders sudoku page at "/sudoku"', () => {
    renderWithRouter(<Routes />, { route: '/sudoku' });
    expect(screen.getByText('Sudoku')).toBeInTheDocument();
  });
});